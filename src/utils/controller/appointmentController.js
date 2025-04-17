// controllers/appointmentController.js

import Visitor from '../models/Visitors.js';
import Appointment from '../models/Appointment.js';
// IMPORTANT: Make sure you have created and exported your AppointmentStatus model
// The example below assumes you have a model file named 'AppointmentStatus.js'
import AppointmentStatus from '../models/AppointmentStatus.js';

/**
 * Create a new appointment, and create or reuse a visitor record.
 */
export const createAppointment = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      phone,
      organization,
      province,
      barangay,
      city_municipality,
      street,
      purpose_of_visit,
      population_count,
      preferred_date,
      preferred_time,
      additional_notes
    } = req.body;

    // Basic visitor checks
    if (!first_name || !last_name || !email) {
      return res.status(400).json({ message: 'Missing required visitor fields.' });
    }
    // Basic appointment checks
    if (!purpose_of_visit || !population_count || !preferred_date) {
      return res.status(400).json({ message: 'Missing required appointment info.' });
    }

    // Enforce preferred_time for certain purposes
    const timesRequired = ['School Field Trip', 'Workshops or Classes'];
    if (timesRequired.includes(purpose_of_visit) && !preferred_time) {
      return res.status(400).json({
        message: `Missing preferred_time for purpose: ${purpose_of_visit}`
      });
    }

    // Reuse or create the Visitor record
    let visitor = await Visitor.findOne({
      where: { first_name, last_name, email }
    });

    if (visitor) {
      // Optionally update the visitor's info
      await visitor.update({
        phone: phone || visitor.phone,
        organization: organization || visitor.organization,
        province: province || visitor.province,
        barangay: barangay || visitor.barangay,
        city_municipality: city_municipality || visitor.city_municipality,
        street: street || visitor.street
      });
    } else {
      visitor = await Visitor.create({
        first_name,
        last_name,
        email,
        phone,
        organization,
        province,
        barangay,
        city_municipality,
        street
      });
    }

    // Create the Appointment
    const appointment = await Appointment.create({
      visitor_id: visitor.visitor_id,
      purpose_of_visit,
      population_count,
      preferred_date,
      preferred_time: preferred_time || 'Flexible',
      additional_notes
    });

    // (Optional) You can also immediately create an appointment status row here
    // if you want to default it to 'TO_REVIEW':
    // await AppointmentStatus.create({
    //   appointment_id: appointment.appointment_id,
    //   status: 'TO_REVIEW'
    // });

    return res.status(201).json({
      message: 'Appointment created successfully',
      appointment_id: appointment.appointment_id
    });
  } catch (error) {
    console.error('Error creating appointment:', error);
    return res.status(500).json({
      message: 'Server error creating appointment.',
      error: error.message
    });
  }
};

/**
 * Retrieve all appointments, including their visitor data.
 */
export const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.findAll({
      include: [Visitor]
    });
    return res.json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return res.status(500).json({ message: 'Server error retrieving appointments.' });
  }
};

/**
 * NEW: Update an appointment's status in the appointment_status table.
 * Expects a request body like: { status: "CONFIRMED" }
 */
export const updateAppointmentStatus = async (req, res) => {
  try {
    const { id } = req.params;      // appointmentId
    const { status } = req.body;    // e.g. 'CONFIRMED', 'REJECTED', 'FAILED', etc.

    // Ensure the appointment actually exists
    const appointment = await Appointment.findByPk(id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found.' });
    }

    // Find or create the status row for this appointment
    let appointmentStatus = await AppointmentStatus.findOne({
      where: { appointment_id: id }
    });

    if (!appointmentStatus) {
      // Create a new status record if none exists yet
      appointmentStatus = await AppointmentStatus.create({
        appointment_id: id,
        status
      });
    } else {
      // Update existing status
      appointmentStatus.status = status;
      await appointmentStatus.save();
    }

    return res.status(200).json({
      message: 'Appointment status updated successfully',
      data: appointmentStatus
    });
  } catch (error) {
    console.error('Error updating appointment status:', error);
    return res.status(500).json({
      message: 'Server error updating appointment status.',
      error: error.message
    });
  }
};
