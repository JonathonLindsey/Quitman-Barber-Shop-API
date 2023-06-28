const { ObjectId } = require('mongodb');
const Appointment = require('../../lib/database');

// Middleware to check for duplicate bookings
exports.checkDuplicateBooking = async (req, res, next) => {
  try {
    const { date } = req.body;

    // Check if an appointment already exists for the specified date
    const existingAppointment = await Appointment.findOne({ date });

    if (existingAppointment) {
      return res.status(400).json({ success: false, message: 'Appointment already booked for this date' });
    }

    next();
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Create an appointment
exports.createAppointment = async (req, res) => {
  try {
    const { name, email, date } = req.body;

    // Insert the new appointment into the collection
    const appointment = await Appointment.create({ name, email, date });

    res.status(201).json({ success: true, appointment });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all appointments
exports.getAppointments = async (req, res) => {
  try {
    // Retrieve all appointments from the collection
    const appointments = await Appointment.find();

    res.json({ success: true, appointments });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get a single appointment by ID
exports.getAppointment = async (req, res) => {
  try {
    const appointmentId = req.params.id;

    // Retrieve the appointment with the specified ID from the collection
    const appointment = await Appointment.findById(appointmentId);

    if (!appointment) {
      return res.status(404).json({ success: false, message: 'Appointment not found' });
    }

    res.json({ success: true, appointment });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update an appointment
exports.updateAppointment = async (req, res) => {
  try {
    const appointmentId = req.params.id;
    const { name, email, date } = req.body;

    // Update the appointment with the specified ID in the collection
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      appointmentId,
      { name, email, date },
      { new: true }
    );

    if (!updatedAppointment) {
      return res.status(404).json({ success: false, message: 'Appointment not found' });
    }

    res.json({ success: true, appointment: updatedAppointment });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete an appointment
exports.deleteAppointment = async (req, res) => {
  try {
    const appointmentId = req.params.id;

    // Delete the appointment with the specified ID from the collection
    const deletedAppointment = await Appointment.findByIdAndDelete(appointmentId);

    if (!deletedAppointment) {
      return res.status(404).json({ success: false, message: 'Appointment not found' });
    }

    res.json({ success: true, message: 'Appointment deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};