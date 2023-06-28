// appointmentMiddleware.js

const Appointment = require('../../lib/database');

// Middleware to check for duplicate bookings
exports.checkDuplicateBooking = async (req, res, next) => {
  try {
    const { date } = req.body;
    const existingAppointment = await Appointment.findOne({ date });
    if (existingAppointment) {
      return res.status(400).json({ success: false, message: 'Appointment already booked for this date' });
    }
    next();
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
