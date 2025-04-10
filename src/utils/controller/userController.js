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