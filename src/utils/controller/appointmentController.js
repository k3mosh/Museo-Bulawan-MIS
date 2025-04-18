// controllers/appointmentController.js
import Visitor from '../models/Visitors.js';
import Appointment from '../models/Appointment.js';


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
      // Removed creation_date since it's not actually used by the front end
    } = req.body;

    // 1) Basic visitor checks
    if (!first_name || !last_name || !email) {
      return res.status(400).json({ message: 'Missing required visitor fields.' });
    }
    // 2) Basic appointment checks
    if (!purpose_of_visit || !population_count || !preferred_date) {
      return res.status(400).json({ message: 'Missing required appointment info.' });
    }

    // 3) Enforce time only for certain purposes
    const timesRequired = ['School Field Trip', 'Workshops or Classes'];
    if (timesRequired.includes(purpose_of_visit) && !preferred_time) {
      return res.status(400).json({
        message: `Missing preferred_time for purpose: ${purpose_of_visit}`
      });
    }

    // 4) Reuse or create visitor
    let visitor = await Visitor.findOne({
      where: { first_name, last_name, email }
    });

    if (visitor) {
      // Optionally update visitor info if needed
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

    // 5) Insert new appointment
    const appointment = await Appointment.create({
      visitor_id: visitor.visitor_id,
      purpose_of_visit,
      population_count,
      preferred_date,
      // If no preferred_time from frontend and not required, default to "Flexible"
      preferred_time: preferred_time || 'Flexible',
      additional_notes
    });

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


// New controller to get all appointments
export const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.findAll({
      include: [
        {
          model: Visitor,

        }
      ]
    });
    return res.json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return res.status(500).json({ message: 'Server error retrieving appointments.' });
  }
};