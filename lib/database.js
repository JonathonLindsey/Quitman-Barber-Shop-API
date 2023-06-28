const mongoose = require('mongoose');
const { MONGODB_URI, APPOINTMENTS_COLLECTION } = require('./constants');

// Connect to the MongoDB database
const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1/appointments', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Failed to connect to the database:', error.message);
    process.exit(1); // Exit the process with a non-zero status code
  }
};

// Define the appointment schema
const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, required: true },
});

// Create the Appointment model
const Appointment = mongoose.model('Appointment', appointmentSchema);

// Export the database connection function and the Appointment model
module.exports = {
  connectToDatabase,
  Appointment,
};
