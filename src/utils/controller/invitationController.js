import Invitation from '../models/Invitation.js';
import User from '../models/Users.js';
import Credential from '../models/Credential.js';
import { v4 as uuidv4 } from 'uuid';
import nodemailer from 'nodemailer';
import bcrypt from 'bcrypt';
import { sequelize } from '../database.js';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER || 'museobulawanmis@gmail.com',
    pass: process.env.EMAIL_APP_PASSWORD || 'zabj fmlp fnow rsse'
  },
  tls: {
    rejectUnauthorized: false
  }
});

transporter.verify(function(error, success) {
  if (error) {
    console.log('SMTP Connection Error:', error);
  } else {
    console.log("SMTP Server is ready to take our messages");
  }
});

const formatInvitation = (invitation) => {
  return {
    id: invitation.id,
    email: invitation.email,
    first_name: invitation.first_name,
    last_name: invitation.last_name,
    contact_number: invitation.contact_number || '',
    role: invitation.role,
    position: invitation.position,
    expiresAt: invitation.expiresAt,
    isUsed: invitation.isUsed,
    createdAt: invitation.createdAt,
    deletedAt: invitation.deletedAt
  };
};

export const sendInvitation = async (req, res, next) => {
  console.log('Received invitation request:', req.body);

  try {
    const { first_name, last_name, email, role, position, contact_number } = req.body;

    if (!first_name || !last_name || !email || !role) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    const existingCredential = await Credential.findOne({ where: { email } });
    if (existingCredential) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const existingInvitation = await Invitation.findOne({
      where: {
        email,
        isUsed: false,
        expiresAt: { [sequelize.Sequelize.Op.gt]: new Date() },
        deletedAt: null
      }
    });

    if (existingInvitation) {
      return res.status(400).json({ message: 'Pending invitation already exists' });
    }

    const token = uuidv4();
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);

    let invitation;
    try {
      invitation = await Invitation.create({
        email,
        first_name,
        last_name,
        contact_number: contact_number || null,
        token,
        expiresAt,
        role,
        position: position || null
      });
    
      console.log('Invitation created:', invitation);
    
      req.logDetails = {
        new: invitation.dataValues,
        message: `An invitation was created and added to the Invitation table`
      };
    
      res.locals.newRecordId = invitation.id;
    } catch (dbError) {
      console.error('Database error:', dbError);
      return res.status(400).json({
        new: invitation,
        message: 'Invalid data provided',
        details: dbError.message
      });
    }
    

    const protocol = req.protocol || 'http';
    const host = req.get('host') || 'localhost:5000';
    const inviteUrl = `${protocol}://${host}/api/auth/complete-registration/${token}`;

    if (process.env.NODE_ENV === 'development' && process.env.SKIP_EMAILS === 'true') {
      console.log('Development email skip:', email);
      return res.status(201).json({
        message: 'Invitation created (email skipped)',
        invitation: formatInvitation(invitation)
      });
    }

    try {
      const info = await transporter.sendMail({
        from: '"Museo Bulawan" <museobulawanmis@gmail.com>',
        to: email,
        subject: 'Invitation to join Museo Bulawan',
        html: `
          <p>Hello ${first_name},</p>
          <p>You have been invited to join Museo Bulawan as <strong>${role}</strong>.</p>
          <p>Please click the link below to complete your registration:</p>
          <a href="${inviteUrl}">${inviteUrl}</a>
          <p>This invitation will expire on ${expiresAt.toDateString()}.</p>
        `
      });

      console.log('Email sent:', info.response);
      next();
      return res.status(201).json({
        message: 'Invitation sent',
        invitation: formatInvitation(invitation)
      });
    } catch (emailError) {
      // console.error('Email error:', emailError);
      return res.status(201).json({
        message: 'Invitation created but email failed',
        invitation: formatInvitation(invitation)
      });
    }

  } catch (error) {
    console.error('Unhandled Error:', error);
    return res.status(500).json({ message: 'Server error', details: error.message });
  }
};



// Get pending invitations
export const getPendingInvitations = async (req, res) => {
  try {
    const invitations = await Invitation.findAll({
      where: {
        isUsed: false,
        expiresAt: { [sequelize.Sequelize.Op.gt]: new Date() },
        deletedAt: null
      },
      order: [['createdAt', 'DESC']]
    });
    
    res.json(invitations.map(formatInvitation));
  } catch (error) {
    console.error('Error fetching:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const resendInvitation = async (req, res, next) => {
  try {
    const { id } = req.params;
    const invitation = await Invitation.findByPk(id);

    if (!invitation) return res.status(404).json({ message: 'Not found' });
    if (invitation.isUsed) return res.status(400).json({ message: 'Already used' });

    const previousState = invitation.toJSON();

    // Update token and expiry
    invitation.token = uuidv4();
    invitation.expiresAt = new Date();
    invitation.expiresAt.setDate(invitation.expiresAt.getDate() + 7);
    await invitation.save();

    const newState = invitation.toJSON();
    const invitationId = invitation.id;

    // Store for logging middleware
    req.logDetails = {
      previous: previousState,
      new: newState,
      message:`Invitation with ID ${invitationId} was resent and updated in the Invitation table`
    };
    res.locals.newRecordId = invitation.id;

    const inviteUrl = `${req.protocol}://${req.get('host')}/api/auth/complete-registration/${invitation.token}`;

    // Send email
    transporter.sendMail({
      from: '"Museo Bulawan" <museobulawanmis@gmail.com>',
      to: invitation.email,
      subject: 'Invitation Reminder',
      html: `<p>Reminder invitation for ${invitation.first_name}.</p><a href="${inviteUrl}">${inviteUrl}</a>`
    }, (error) => {
      if (error) {
        console.error('Email error:', error);
        return res.status(500).json({ message: 'Email failed' });
      }

      res.json({ message: 'Invitation resent' });

      next();
    });

  } catch (error) {
    console.error('Resend Invitation Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};



export const revokeInvitation = async (req, res, next) => {
  try {
    const { id } = req.params;
    const invitation = await Invitation.findByPk(id);

    if (!invitation) return res.status(404).json({ message: 'Not found' });

    const previousState = invitation.toJSON();

    await invitation.update({ deletedAt: new Date() });

    const newState = invitation.toJSON();

    const invitationId = invitation.id;


    req.logDetails = {
      previous: previousState,
      new: newState,
      message: `Invitation with ID ${invitationId} was revoked and marked for soft deletion in the Invitation table`
    };

    res.locals.newRecordId = invitation.id;

   
    res.json({ message: 'Invitation revoked' });
    next(); 
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


export const renderCompleteRegistration = async (req, res) => {
  try {
    const { token } = req.params;
    
    const invitation = await Invitation.findOne({ 
      where: { 
        token,
        isUsed: false,
        expiresAt: { [sequelize.Sequelize.Op.gt]: new Date() }
      }
    });
    
    if (!invitation) {
      return res.status(400).send(`
        <html>
          <head>
            <title>Invalid Invitation</title>
            <style>
              body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; text-align: center; }
              .error { color: #ff0000; }
            </style>
          </head>
          <body>
            <h1 class="error">Invalid or Expired Invitation</h1>
            <p>The invitation link you accessed is invalid or has expired.</p>
            <p>Please contact your administrator for a new invitation.</p>
          </body>
        </html>
      `);
    }
    
    // Send the registration form
    res.send(`
      <html>
        <head>
          <title>Complete Registration</title>
          <style>
            body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }
            .form-group { margin-bottom: 15px; }
            label { display: block; margin-bottom: 5px; font-weight: bold; }
            input { width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; }
            button { padding: 10px 15px; background-color: #6F3FFF; color: white; border: none; border-radius: 4px; cursor: pointer; }
            .error { color: #ff0000; margin-top: 15px; }
          </style>
        </head>
        <body>
          <h1>Complete Your Registration</h1>
          <p>Hello ${invitation.first_name}, set your password to complete your account setup.</p>
          <form id="registrationForm">
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" id="password" name="password" required minlength="8">
            </div>
            <div class="form-group">
              <label for="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" name="confirmPassword" required minlength="8">
            </div>
            <button type="submit">Complete Registration</button>
            <div id="error" class="error" style="display: none;"></div>
          </form>
          
          <script>
            document.getElementById('registrationForm').addEventListener('submit', async function(e) {
              e.preventDefault();
              
              const password = document.getElementById('password').value;
              const confirmPassword = document.getElementById('confirmPassword').value;
              const errorDiv = document.getElementById('error');
              
              if (password !== confirmPassword) {
                errorDiv.textContent = "Passwords do not match";
                errorDiv.style.display = "block";
                return;
              }
              
              try {
                const response = await fetch('/api/auth/complete-registration/${token}', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ password })
                });
                
                const data = await response.json();
                
                if (!response.ok) {
                  throw new Error(data.message || "Error completing registration");
                }
                
                window.location.href = '/api/auth/registration-success';
                
              } catch (error) {
                errorDiv.textContent = error.message;
                errorDiv.style.display = "block";
              }
            });
          </script>
        </body>
      </html>
    `);
    
  } catch (error) {
    console.error('Error rendering registration form:', error);
    res.status(500).send('Server error. Please try again later.');
  }
};

// Complete registration
export const completeRegistration = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;
    
    if (!password) {
      return res.status(400).json({ message: 'Password is required' });
    }
    
    const invitation = await Invitation.findOne({ 
      where: { 
        token,
        isUsed: false,
        expiresAt: { [sequelize.Sequelize.Op.gt]: new Date() }
      }
    });
    
    if (!invitation) {
      return res.status(400).json({ message: 'Invalid or expired invitation' });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create credential
    const credential = await Credential.create({
      first_name: invitation.first_name,
      last_name: invitation.last_name,
      email: invitation.email,
      password: hashedPassword,
      role: invitation.role,
      position: invitation.position,
      contact_number: invitation.contact_number
    });
    
    // Create user with inactive status
    await User.create({
      status: 'inactive',  // Changed from 'active' to 'inactive'
      credential_id: credential.id
    });
    
    // Mark invitation as used
    invitation.isUsed = true;
    await invitation.save();
    
    res.status(201).json({ message: 'Registration completed successfully' });
    
  } catch (error) {
    console.error('Error completing registration:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Registration success page
export const registrationSuccess = (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Registration Successful</title>
        <style>
          body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; text-align: center; }
          .success { color: #00a651; }
        </style>
      </head>
      <body>
        <h1 class="success">Registration Successful!</h1>
        <p>Your account has been created successfully.</p>
        <p>Your account is pending approval from an administrator. You will be notified when your account is activated.</p>
        <p>You can try to <a href="http://localhost:5173/login">login</a> once your account has been approved.</p>
      </body>
    </html>
  `);
};
