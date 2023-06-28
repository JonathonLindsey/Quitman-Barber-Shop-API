const express = require('express');
const appointmentsController = require('../controllers/appointmentController');
const router = express.Router();

router.get('/', appointmentsController.getAppointments);
router.get('/:id', appointmentsController.getAppointment);
router.post('/', appointmentsController.createAppointment);
router.delete('/:id', appointmentsController.deleteAppointment);
router.put('/:id', appointmentsController.replaceAppointment);
router.patch('/:id', appointmentsController.updateAppointment);

module.exports = router;
