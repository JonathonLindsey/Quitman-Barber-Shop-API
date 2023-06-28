const { Schema, model } = require('mongoose');

const appointmentSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, required: true },
});

module.exports = model('Appointment', appointmentSchema);
