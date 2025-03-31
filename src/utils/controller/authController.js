import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Credential from '../models/Credential.js';
import LoginLog from '../models/LoginLogs.js';

const JWT_SECRET = process.env.JWT_SECRET || 'hachsinail';

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

    const existingLog = await LoginLog.findOne({
      where: { credential_id: credential.id, end: null },
    });

    if (!existingLog) {
      await LoginLog.create({
        credential_id: credential.id,
        start: new Date(),
        end: null,
      });
    }

    const payload = {
      id: credential.id,
      email: credential.email,
      role: credential.role,
      first_name: credential.first_name,
      last_name: credential.last_name,
      position: credential.position,
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
    return res.status(200).json({ token });
  } catch {
    return res.status(500).json({ message: 'Server error' });
  }
};

export const logout = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    const credential = await Credential.findByPk(decoded.id);
    if (!credential) {
      return res.status(400).json({ message: 'User not found' });
    }

    const loginLog = await LoginLog.findOne({
      where: { credential_id: credential.id, end: null },
      order: [['start', 'DESC']],
    });

    if (loginLog) {
      await loginLog.update({ end: new Date() });
    }

    return res.status(200).json({ message: 'User logged out successfully' });
  } catch {
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
        const decodedToken = jwt.decode(token);
        if (decodedToken && decodedToken.id) {
          try {
            const credential = await Credential.findByPk(decodedToken.id);
            if (credential) {
              const loginLog = await LoginLog.findOne({
                where: { credential_id: credential.id, end: null },
                order: [['start', 'DESC']],
              });
              if (loginLog) {
                await loginLog.update({ end: new Date() });
              }
            }
          } catch {}
        }
        return res.status(401).json({ message: 'Session expired, you have been logged out automatically.' });
      } else {
        return res.status(401).json({ message: 'Unauthorized' });
      }
    }

    req.user = decoded;
    next();
  });
};
