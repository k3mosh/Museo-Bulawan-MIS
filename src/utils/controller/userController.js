import Credential from '../models/Credential.js';
import LoginLog from '../models/LoginLogs.js';
import User from '../models/Users.js'

export const displayUsers = async (req, res) => {

    try {
        const users = await User.findAll({
            include: [{
                model: Credential,
                required: true  
            }],
        });
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users' });
    }

}

export const displaySpecificUser = async (req, res) => {
    const { id } = req.params;  
  
    try {
      const user = await User.findOne({
        include: [{
          model: Credential,
          required: true,
          where: { id }  
        }],
      });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }
  
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching user.' });
    }
  };