const Constants = require('../../lib/constants');
const db = require('../../lib/database');

const appointmentMiddleware = async (req, res, next) => {
  try {
    console.log('Appointment Middleware');
  
    // Retrieve the appointment collection name from the constants
    const appointmentsCollection = Constants.COLLECTIONS.APPOINTMENTS;
  
    // Assuming appointment date and time are present in the request body
    const appointmentDateTime = req.body.appointmentDateTime;
  
    // Check if there is an existing appointment with the same date and time
    const existingAppointment = await db.getDb()
      .collection(appointmentsCollection)
      .findOne({ appointmentDateTime });
  
    if (existingAppointment) {
      return res.status(409).json({ error: 'Duplicate appointment' });
    }
  
    // If there is no duplicate appointment, proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Handle any errors that occurred during the middleware execution
    console.error('Error in appointment middleware:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = appointmentMiddleware;

