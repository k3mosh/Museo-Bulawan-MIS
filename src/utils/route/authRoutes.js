import express from 'express';
import { login, logout, autoLogout  } from '../controller/authController.js';
import { displayUsers, displaySpecificUser } from '../controller/userController.js';
import { createAppointment, getAllAppointments } from '../controller/appointmentController.js';


const router = express.Router();

router.post('/login', login);
router.post('/logout', logout);

router.get('/fetchUsers', autoLogout ,displayUsers);
router.get('/fetchUser/:id', autoLogout, displaySpecificUser);
router.post('/appointment' , createAppointment);
router.get('/appointment', autoLogout ,getAllAppointments);


export default router;
