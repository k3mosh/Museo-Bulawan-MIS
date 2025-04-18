// controller/invitationController.js
import Invitation from '../models/Invitation.js';
import User from '../models/Users.js';
import Credential from '../models/Credential.js';
import { v4 as uuidv4 } from 'uuid';
import nodemailer from 'nodemailer';
import bcrypt from 'bcrypt';
import { sequelize } from '../database.js'; // Import sequelize instance

// // Configure nodemailer
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'museobulawanmis@gmail.com',
//     pass: 'zabj fmlp fnow rsse'
//   }
// });

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',  // Specify SMTP host explicitly
  port: 465,  // Secure port
  secure: true,  // Use SSL
  auth: {
    user: process.env.EMAIL_USER || 'museobulawanmis@gmail.com',
    pass: process.env.EMAIL_APP_PASSWORD || 'zabj fmlp fnow rsse'  // Use App Password, not regular password
  },
  tls: {
    // Do not fail on invalid certs
    rejectUnauthorized: false
  }
});

// Verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log('SMTP Connection Error:', error);
  } else {
    console.log("SMTP Server is ready to take our messages");
  }
});


// Helper to format invitation for frontend
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
    createdAt: invitation.createdAt
  };
};

// Send invitation to a new user
export const sendInvitation = async (req, res) => {
  console.log('Received invitation request:', req.body);
  
  try {
    const { first_name, last_name, email, role, position, contact_number } = req.body;
    
    // Validate request
    if (!first_name || !last_name || !email || !role) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // Check if user already exists
    const existingCredential = await Credential.findOne({ where: { email } });
    if (existingCredential) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Check if there's already a pending invitation
    const existingInvitation = await Invitation.findOne({ 
      where: { 
        email,
        isUsed: false,
        expiresAt: { [sequelize.Sequelize.Op.gt]: new Date() }
      }
    });

    if (existingInvitation) {
      return res.status(400).json({ message: 'There is already a pending invitation for this email' });
    }
    
    // Generate unique token
    const token = uuidv4();
    
    // Set expiration (7 days from now)
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);
    
    // Create invitation with try/catch for database error handling
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
      console.log('Invitation created successfully');
    } catch (dbError) {
      console.error('Database error creating invitation:', dbError);
      return res.status(400).json({ 
        message: 'Invalid data provided', 
        details: dbError.message 
      });
    }
    
    // Create invite URL with fallbacks
    const protocol = req.protocol || 'http';
    const host = req.get('host') || 'localhost:5000';
    const inviteUrl = `${protocol}://${host}/api/auth/complete-registration/${token}`;
    
    // Use a more reliable method to send email
    try {
      // For development mode, you could skip sending emails
      if (process.env.NODE_ENV === 'development' && process.env.SKIP_EMAILS === 'true') {
        console.log('Email would be sent in production to:', email);
        console.log('Invite URL:', inviteUrl);
        return res.status(201).json({ 
          message: 'Invitation created successfully (email sending skipped in development)',
          invitation: formatInvitation(invitation)
        });
      }
      
      // Actually send the email
      const info = await new Promise((resolve, reject) => {
        transporter.sendMail({
          from: '"Museo Bulawan" <museobulawanmis@gmail.com>',
          to: email,
          subject: 'Invitation to join Museo Bulawan',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
              <h2>Hello ${first_name},</h2>
              <p>You've been invited to create an account on Museo Bulawan platform.</p>
              <p>Please click the button below to set your password and complete your registration:</p>
              <a href="${inviteUrl}" style="display: inline-block; padding: 10px 20px; background-color: #6F3FFF; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0;">Complete Registration</a>
              <p><strong>Note:</strong> This link will expire in 7 days.</p>
              <p>If you did not request this invitation, please ignore this email.</p>
              <p>Best regards,<br>Museo Bulawan Team</p>
            </div>
          `
        }, (error, info) => {
          if (error) {
            reject(error);
          } else {
            resolve(info);
          }
        });
      });
      
      console.log('Email sent successfully:', info.response);
      return res.status(201).json({ 
        message: 'Invitation sent successfully',
        invitation: formatInvitation(invitation)
      });
      
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      
      // Return success but note the email failure
      // The invitation is still created in the database
      return res.status(201).json({ 
        message: 'Invitation created but email could not be sent. Please try resending later.',
        invitation: formatInvitation(invitation)
      });
    }
    
  } catch (error) {
    console.error('Detailed invitation error:', error);
    console.error('Error stack:', error.stack);
    res.status(500).json({ message: 'Server error', details: error.message });
  }
};



// Get all pending invitations
export const getPendingInvitations = async (req, res) => {
  try {
    const invitations = await Invitation.findAll({
      where: {
        isUsed: false,
        expiresAt: { [sequelize.Sequelize.Op.gt]: new Date() }
      },
      order: [['createdAt', 'DESC']]
    });
    
    // Format invitations for frontend
    const formattedInvitations = invitations.map(invitation => formatInvitation(invitation));
    
    res.json(formattedInvitations);
  } catch (error) {
    console.error('Error fetching invitations:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Resend invitation
export const resendInvitation = async (req, res) => {
  try {
    const { id } = req.params;
    
    const invitation = await Invitation.findByPk(id);
    
    if (!invitation) {
      return res.status(404).json({ message: 'Invitation not found' });
    }
    
    if (invitation.isUsed) {
      return res.status(400).json({ message: 'Invitation has already been used' });
    }
    
    // Generate new token and reset expiration
    invitation.token = uuidv4();
    invitation.expiresAt = new Date();
    invitation.expiresAt.setDate(invitation.expiresAt.getDate() + 7);
    
    await invitation.save();
    
    // Create invite URL
    const inviteUrl = `${req.protocol}://${req.get('host')}/api/auth/complete-registration/${invitation.token}`;
    
    // Send email
    const mailOptions = {
      from: '"Museo Bulawan" <museobulawanmis@gmail.com>',
      to: invitation.email,
      subject: 'Invitation Reminder - Museo Bulawan',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2>Hello ${invitation.first_name},</h2>
          <p>This is a reminder that you've been invited to create an account on our platform.</p>
          <p>Please click the button below to set your password and complete your registration:</p>
          <a href="${inviteUrl}" style="display: inline-block; padding: 10px 20px; background-color: #6F3FFF; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0;">Complete Registration</a>
          <p><strong>Note:</strong> This link will expire in 7 days.</p>
          <p>If you did not request this invitation, please ignore this email.</p>
          <p>Best regards,<br>Museo Bulawan Team</p>
        </div>
      `
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ message: 'Failed to resend invitation email' });
      }
      res.json({ message: 'Invitation resent successfully' });
    });
    
  } catch (error) {
    console.error('Error resending invitation:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Revoke invitation
export const revokeInvitation = async (req, res) => {
  try {
    const { id } = req.params;
    
    const invitation = await Invitation.findByPk(id);
    
    if (!invitation) {
      return res.status(404).json({ message: 'Invitation not found' });
    }
    
    await invitation.destroy();
    
    res.json({ message: 'Invitation revoked successfully' });
  } catch (error) {
    console.error('Error revoking invitation:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Render complete registration form
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
