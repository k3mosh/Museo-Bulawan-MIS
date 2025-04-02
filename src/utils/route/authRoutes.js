import express from 'express';
import { login, logout, autoLogout  } from '../controller/authController.js';

const router = express.Router();

router.post('/login', login);
router.post('/logout', logout);

// router.post('/fetchDara', autoLogout, fetch );

export default router;
