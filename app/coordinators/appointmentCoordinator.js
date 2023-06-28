const { v4: uuidv4 } = require('uuid');
const AppointmentsModel = require('../models/appointmentModel');

class AppointmentsCoordinator {
  static getAppointments = () => {
    console.log('\t AppointmentsCoordinator.getAppointments');
    return AppointmentsModel.getAppointments();
  };

  static getAppointment = (id) => {
    console.log(`\t AppointmentsCoordinator.getAppointment :: ${id}`);
    return AppointmentsModel.getAppointment(id);
  };

  static createAppointment = (appointment) => {
    console.log('\t AppointmentsCoordinator.createAppointment');
    appointment.id = uuidv4();
    return AppointmentsModel.createAppointment(appointment);
  };

  static deleteAppointment = (id) => {
    console.log('\t AppointmentsCoordinator.deleteAppointment');
    return AppointmentsModel.deleteAppointment(id);
  };

  static replaceAppointment = (id, appointment) => {
    console.log('\t AppointmentsCoordinator.replaceAppointment');
    appointment.id = id;
    return AppointmentsModel.replaceAppointment(id, appointment);
  };

  static updateAppointment = (id, appointment) => {
    console.log('\t AppointmentsCoordinator.updateAppointment');
    appointment.id = id;
    return AppointmentsModel.updateAppointment(id, appointment);
  };
}

module.exports = AppointmentsCoordinator;
