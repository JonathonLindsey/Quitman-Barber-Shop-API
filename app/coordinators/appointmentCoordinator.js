const { v4: uuidv4 } = require('uuid');
const Appointment = require('../../models/appointmentModel');
const { createAppointment } = require('./appointmentCoordinator');


// Create a new appointment
exports.createAppointment = async (name, date, time) => {
  try {
    const appointment = new Appointment({
      _id: uuidv4(),
      name,
      date,
      time,
    });
    await appointment.save();
    return appointment;
  } catch (error) {
    console.error('Failed to create appointment', error);
    throw new Error('Failed to create appointment.');
  }
};

// Get all appointments
exports.getAppointments = async () => {
  try {
    return await Appointment.find();
  } catch (error) {
    console.error('Failed to get appointments', error);
    throw new Error('Failed to get appointments.');
  }
};

// Get a single appointment by ID
exports.getAppointmentById = async (id) => {
  try {
    return await Appointment.findById(id);
  } catch (error) {
    console.error('Failed to get appointment', error);
    throw new Error('Failed to get appointment.');
  }
};

// Update an appointment
exports.updateAppointment = async (id, name, date, time) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      id,
      { name, date, time },
      { new: true }
    );
    if (!appointment) {
      throw new Error('Appointment not found.');
    }
    return appointment;
  } catch (error) {
    console.error('Failed to update appointment', error);
    throw new Error('Failed to update appointment.');
  }
};

// Delete an appointment
exports.deleteAppointment = async (id) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(id);
    if (!appointment) {
      throw new Error('Appointment not found.');
    }
  } catch (error) {
    console.error('Failed to delete appointment', error);
    throw new Error('Failed to delete appointment.');
  }
};

module.exports = {
   createAppointment,
};