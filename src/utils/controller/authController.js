import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/Users.js';
import Credential from '../models/Credential.js';
import LoginLog from '../models/LoginLogs.js';

const JWT_SECRET = process.env.JWT_SECRET || 'hachsinail';

// **Login Controller**
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const credential = await Credential.findOne({ where: { email } });
    if (!credential) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, credential.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    let user = await User.findOne({ where: { credential_id: credential.id } });
    if (!user) {
      user = await User.create({
        credential_id: credential.id,
        status: 'active',
      });
    } else {
      await user.update({ status: 'active', modified_date: new Date() });
    }

    await LoginLog.create({
      user_id: user.id,
      start: new Date(),  
      end: null,          
    });

    const payload = { id: user.id, email: credential.email, role: credential.role };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

    return res.status(200).json({ token });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// **Logout Controller**
export const logout = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: 'No token provided' });
    }
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await User.findByPk(decoded.id);
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const loginLog = await LoginLog.findOne({
      where: { user_id: user.id, end: null },
      order: [['start', 'DESC']],
    });

    if (loginLog) {
      await loginLog.update({
        end: new Date(), 
      });
    }

    await user.update({ status: 'inactive', modified_date: new Date() });

    return res.status(200).json({ message: 'User logged out successfully' });
  } catch (error) {
    console.error('Logout error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};


export const autoLogout = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, JWT_SECRET, async (err, decoded) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        // Decode token manually to get user info
        const decodedToken = jwt.decode(token);
        if (decodedToken && decodedToken.id) {
          try {
            const user = await User.findByPk(decodedToken.id);
            if (user) {
              // Find active login log for the user
              const loginLog = await LoginLog.findOne({
                where: { user_id: user.id, end: null },
                order: [['start', 'DESC']],
              });

              if (loginLog) {
                await loginLog.update({ end: new Date() }); // Set logout time
              }

              // Update user status to inactive
              await user.update({ status: 'inactive', modified_date: new Date() });

              console.log(`User ${user.id} auto-logged out due to token expiration.`);
            }
          } catch (updateError) {
            console.error('Error during auto logout update:', updateError);
          }
        }
        return res.status(401).json({ message: 'Session expired, you have been logged out automatically.' });
      } else {
        return res.status(401).json({ message: 'Unauthorized: ' + err.message });
      }
    }

    req.user = decoded;
    next();
  });
};
