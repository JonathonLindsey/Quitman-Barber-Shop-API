const express = require('express');
const appointmentController = require('../controllers/appointmentController');
const appointmentMiddleware = require('../middleware/appointmentMiddleware');

const router = express.Router();

// Create an appointment
router.post('/', appointmentMiddleware.checkDuplicateBooking, appointmentController.createAppointment);

// Get all appointments
router.get('/', appointmentController.getAppointments);

// Get a single appointment
router.get('/:id', appointmentController.getAppointment);

// Update an appointment
router.put('/:id', appointmentController.updateAppointment);

// Delete an appointment
router.delete('/:id', appointmentController.deleteAppointment);

module.exports = router;
