// controllers/appointmentController.js

import Visitor from '../models/Visitors.js';
import Appointment from '../models/Appointment.js';
import { Op } from 'sequelize';

import AppointmentStatus from '../models/AppointmentStatus.js';

/**
 * Create a new appointment, reusing or creating the visitor.
 */
export const createAppointment = async (req, res, next) => {
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

    // Basic checks
    if (!first_name || !last_name || !email) {
      return res.status(400).json({ message: 'Missing required visitor fields.' });
    }
    if (!purpose_of_visit || !population_count || !preferred_date) {
      return res.status(400).json({ message: 'Missing required appointment info.' });
    }

    // Enforce time only for certain purposes
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

    // Insert new appointment
    const appointment = await Appointment.create({
      visitor_id: visitor.visitor_id,
      purpose_of_visit,
      population_count,
      preferred_date,
      preferred_time: preferred_time || 'Flexible',
      additional_notes
    });

    // (Optional) Insert an initial status row here if you want:
    // await AppointmentStatus.create({
    //   appointment_id: appointment.appointment_id,
    //   status: 'TO_REVIEW'
    // });

    req.logDetails = {
      new: appointment.dataValues,
      message: `a visitor has successfully created an appoinment.`,
    };
    res.locals.newRecordId = appointment.appointment_id;

    res.status(201).json({
      message: 'Appointment created successfully',
      appointment_id: appointment.appointment_id
    });

    return next();

  } catch (error) {
    console.error('Error creating appointment:', error);
    return res.status(500).json({
      message: 'Server error creating appointment.',
      error: error.message
    });
  }
};


export const updateAppointmentStatus = async (req, res) => {
  try {
    const { id } = req.params
    const { status, present_count } = req.body

    // Confirm the appointment exists
    const appointment = await Appointment.findByPk(id)
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found.' })
    }

    // Find or create the linked status record
    let appointmentStatus = await AppointmentStatus.findOne({
      where: { appointment_id: id },
    })
    if (!appointmentStatus) {
      appointmentStatus = await AppointmentStatus.create({
        appointment_id: id,
        status: status || 'TO_REVieW',
        present_count,
      })
    } else {
      if (status !== undefined) {
        appointmentStatus.status = status
      }
      if (present_count !== undefined) {
        appointmentStatus.present_count = present_count
      }
      appointmentStatus.updated_at = new Date() // Update timestamp when status changes
      await appointmentStatus.save()
    }

    return res.status(200).json({
      message: 'Appointment status updated successfully',
      data: appointmentStatus,
    })
  } catch (error) {
    console.error('Error updating appointment status:', error)
    return res.status(500).json({
      message: 'Server error updating appointment status.',
      error: error.message,
    })
  }
}

export const getAppointmentStats = async (req, res) => {
    try {
      // Default should load all data without date filtering
      // Only filter when date is explicitly provided
      const filterDate = req.query.date ? new Date(req.query.date) : null;
      
      // Build the where clause for date filtering (only if date is provided)
      const dateWhere = {};
      if (filterDate) {
        const startDate = new Date(filterDate);
        startDate.setHours(0, 0, 0, 0);
        
        const endDate = new Date(filterDate);
        endDate.setHours(23, 59, 59, 999);
        
        dateWhere.creation_date = {
          [Op.between]: [startDate, endDate]
        };
      }
  
      // Get all appointment data without filtering by default
      const appointments = await Appointment.findAll({
        where: Object.keys(dateWhere).length > 0 ? dateWhere : {},
        include: [
          {
            model: AppointmentStatus,
            required: false
          }
        ],
        attributes: ['appointment_id', 'population_count']
      });
    
    // Calculate stats in memory
    let approvedCount = 0;
    let rejectedCount = 0;
    let completedCount = 0;
    let failedCount = 0;
    let expectedVisitors = 0;
    let presentCount = 0;
    
    appointments.forEach(appointment => {
      // Sum expected visitors
      expectedVisitors += appointment.population_count || 0;
      
      // Process status counts
      if (appointment.AppointmentStatus) {
        const status = (appointment.AppointmentStatus.status || '').toUpperCase();
        
        if (status.includes('CONFIRM')) approvedCount++;
        else if (status.includes('REJECT')) rejectedCount++;
        else if (status.includes('COMPLET')) completedCount++;
        else if (status.includes('FAIL')) failedCount++;
        
        // Sum present count - safely handle null values
        const present = appointment.AppointmentStatus.present_count;
        presentCount += present !== null && present !== undefined ? Number(present) : 0;
      }
    });

    return res.json({
      approved: approvedCount,
      rejected: rejectedCount,
      completed: completedCount,
      failed: failedCount,
      expectedVisitors,
      present: presentCount // Keep this name to match what the frontend expects
    });
  } catch (error) {
    console.error('Error retrieving appointment stats:', error);
    return res.status(500).json({
      message: 'Server error retrieving appointment stats.',
      error: error.message
    });
  }
};



/**
 * Fetch all appointments, eagerly loading Visitor data.
 */
export const getAllAppointments = async (req, res) => {
  try {
    // Get date from query param if provided
    const filterDate = req.query.date ? new Date(req.query.date) : null;
    
    // Build the where clause for date filtering
    let where = {};
    if (filterDate) {
      // Set start and end time for the selected date
      const startDate = new Date(filterDate);
      startDate.setHours(0, 0, 0, 0);
      
      const endDate = new Date(filterDate);
      endDate.setHours(23, 59, 59, 999);
      
      where.creation_date = {
        [Op.between]: [startDate, endDate]
      };
    }

    const appointments = await Appointment.findAll({
      where,
      include: [Visitor, AppointmentStatus]
    });
    return res.json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return res.status(500).json({ message: 'Server error retrieving appointments.' });
  }
};




export const getAttendanceData = async (req, res) => {
  try {
    // Get date from query param if provided
    const filterDate = req.query.date ? new Date(req.query.date) : null;
    
    // Build the where clause for date filtering
    const where = {};
    if (filterDate) {
      // Set start and end time for the selected date
      const startDate = new Date(filterDate);
      startDate.setHours(0, 0, 0, 0);
      
      const endDate = new Date(filterDate);
      endDate.setHours(23, 59, 59, 999);
      
      where.creation_date = {
        [Op.between]: [startDate, endDate]
      };
    }
    
    const data = await Appointment.findAll({
      where,
      attributes: [
        'appointment_id',
        'purpose_of_visit',
        'preferred_date',
        'population_count',
        'creation_date'
      ],
      include: [
        {
          model: Visitor,
          attributes: ['first_name', 'last_name']
        },
        {
          model: AppointmentStatus,
          attributes: ['status', 'present_count', 'updated_at']
        }
      ]
    });

    // Transform for your front-end: rename fields, etc.
    const transformedData = data.map((appt) => ({
      appointment_id: appt.appointment_id,
      date: appt.creation_date ? new Date(appt.creation_date).toLocaleString() : 'N/A',
      visitorName: `${appt.Visitor?.first_name || 'N/A'} ${appt.Visitor?.last_name || ''}`,
      purpose: appt.purpose_of_visit,
      preferredDate: appt.preferred_date || 'N/A',
      expectedVisitor: appt.population_count,
      // If present_count is null, it's "ongoing" on the front-end
      present: appt.AppointmentStatus?.present_count ?? 'ongoing',
      status: appt.AppointmentStatus?.status || 'TO_REVIEW'
    }));

    return res.json(transformedData);
  } catch (error) {
    console.error('Error fetching attendance data:', error);
    return res.status(500).json({
      message: 'Server error retrieving attendance data.',
      error: error.message
    });
  }
}

export const getVisitorRecords = async (req, res) => {
  try {
    // Get date from query param if provided
    const filterDate = req.query.date ? new Date(req.query.date) : null;
    
    let appointmentWhere = {};
    if (filterDate) {
      // Set start and end time for the selected date
      const startDate = new Date(filterDate);
      startDate.setHours(0, 0, 0, 0);
      
      const endDate = new Date(filterDate);
      endDate.setHours(23, 59, 59, 999);
      
      appointmentWhere.creation_date = {
        [Op.between]: [startDate, endDate]
      };
    }
    
    // Load all visitors with their associated appointments and statuses
    const visitors = await Visitor.findAll({
      include: [
        {
          model: Appointment,
          where: Object.keys(appointmentWhere).length > 0 ? appointmentWhere : undefined,
          include: [AppointmentStatus],
        },
      ],
      order: [['visitor_id', 'ASC']], // or any sorting you prefer
    });

    // Transform data for the frontend
    const records = visitors.map((visitor) => {
      // Gather all appointments
      // Update this part in the getVisitorRecords function in appointmentController.js
const details = visitor.Appointments.map((appt) => ({
  appointment_id: appt.appointment_id, // Add this line
  purpose: appt.purpose_of_visit,
  visitorCount: appt.population_count,
  present: appt.AppointmentStatus?.present_count || 0,
  date: appt.preferred_date,
  status: appt.AppointmentStatus?.status || 'TO_REVIEW'
}));


      return {
        id: visitor.visitor_id,
        date: details.length > 0 ? details[0].date : null,
        visitorName: `${visitor.first_name} ${visitor.last_name}`,
        visitCount: details.length,
        details,
      };
    });

    return res.json(records);
  } catch (error) {
    console.error('Error fetching visitor records:', error);
    return res.status(500).json({
      message: 'Server error retrieving visitor records.',
      error: error.message,
    });
  }
};


// Add these new controller functions to your appointmentController.js

/**
 * Get detailed information for a specific attendance record
 */
export const getAttendanceDetail = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Find the appointment with its related visitor and status
    const appointment = await Appointment.findByPk(id, {
      include: [
        {
          model: Visitor,
          attributes: [
            'visitor_id', 'first_name', 'last_name', 'email', 
            'phone', 'organization', 'street', 'barangay',
            'city_municipality', 'province'
          ]
        },
        {
          model: AppointmentStatus,
          attributes: ['status', 'present_count', 'updated_at']
        }
      ]
    });
    
    if (!appointment) {
      return res.status(404).json({ message: 'Attendance record not found.' });
    }

    // Format the data for the frontend
    const detailData = {
      appointment_id: appointment.appointment_id,
      purpose: appointment.purpose_of_visit,
      populationCount: appointment.population_count,
      preferredDate: appointment.preferred_date,
      preferredTime: appointment.preferred_time,
      notes: appointment.additional_notes,
      creation_date: appointment.creation_date,
      status: appointment.AppointmentStatus?.status || 'TO_REVIEW',
      present: appointment.AppointmentStatus?.present_count,
      
      // Visitor information
      fromFirstName: appointment.Visitor?.first_name || '',
      fromLastName: appointment.Visitor?.last_name || '',
      email: appointment.Visitor?.email || '',
      phone: appointment.Visitor?.phone || '',
      organization: appointment.Visitor?.organization || '',
      street: appointment.Visitor?.street || '',
      barangay: appointment.Visitor?.barangay || '',
      city_municipality: appointment.Visitor?.city_municipality || '',
      province: appointment.Visitor?.province || ''
    };

    return res.json(detailData);
  } catch (error) {
    console.error('Error fetching attendance detail:', error);
    return res.status(500).json({
      message: 'Server error retrieving attendance detail.',
      error: error.message
    });
  }
};

/**
 * Get visitor record detail by visitor ID and appointment ID
 */
export const getVisitorRecordDetail = async (req, res) => {
  try {
    const { visitorId, appointmentId } = req.params;
    
    // Find the specific visitor
    const visitor = await Visitor.findByPk(visitorId);
    
    if (!visitor) {
      return res.status(404).json({ message: 'Visitor record not found.' });
    }
    
    // Find the specific appointment for this visitor
    const appointment = await Appointment.findOne({
      where: {
        visitor_id: visitorId,
        appointment_id: appointmentId
      },
      include: [
        {
          model: AppointmentStatus,
          attributes: ['status', 'present_count', 'updated_at']
        }
      ]
    });
    
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment record not found for this visitor.' });
    }
    
    // Format the data for the frontend
    const detailData = {
      appointment_id: appointment.appointment_id,
      purpose: appointment.purpose_of_visit,
      populationCount: appointment.population_count,
      preferredDate: appointment.preferred_date,
      preferredTime: appointment.preferred_time,
      notes: appointment.additional_notes,
      creation_date: appointment.creation_date,
      status: appointment.AppointmentStatus?.status || 'TO_REVIEW',
      present: appointment.AppointmentStatus?.present_count,
      
      // Visitor information
      fromFirstName: visitor.first_name || '',
      fromLastName: visitor.last_name || '',
      email: visitor.email || '',
      phone: visitor.phone || '',
      organization: visitor.organization || '',
      street: visitor.street || '',
      barangay: visitor.barangay || '',
      city_municipality: visitor.city_municipality || '',
      province: visitor.province || ''
    };
    
    return res.json(detailData);
  } catch (error) {
    console.error('Error fetching visitor record detail:', error);
    return res.status(500).json({
      message: 'Server error retrieving visitor record detail.',
      error: error.message
    });
  }
};


