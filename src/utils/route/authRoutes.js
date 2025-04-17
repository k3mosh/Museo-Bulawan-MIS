// routes/authRoutes.js

import express from 'express';
import { login, logout, autoLogout } from '../controller/authController.js';
import { displayUsers, displaySpecificUser } from '../controller/userController.js';
import {
  createAppointment,
  getAllAppointments,
  updateAppointmentStatus
} from '../controller/appointmentController.js';

const router = express.Router();

router.post('/login', login);
router.post('/logout', logout);


router.get('/fetchUsers', autoLogout, displayUsers);
router.get('/fetchUser/:id', autoLogout, displaySpecificUser);

// Appointment CRUD
router.post('/appointment', createAppointment);
router.get('/appointment', autoLogout, getAllAppointments);

// NEW: Update appointment status in the appointment_status table
router.patch('/appointment/:id/status', autoLogout, updateAppointmentStatus);

export default router;
