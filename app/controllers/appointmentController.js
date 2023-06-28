const AppointmentsCoordinator = require('../coordinators/appointmentCoordinator');

const getAppointments = async (req, res, next) => {
  console.log('appointmentsController.getAppointments');

  const result = await AppointmentsCoordinator.getAppointments();
  res.status(200).json(result);
};

const getAppointment = async (req, res, next) => {
  console.log('appointmentsController.getAppointment');
  const foundAppointment = await AppointmentsCoordinator.getAppointment(req.params.id);
  
  if (foundAppointment) {
    res.status(200).json(foundAppointment);
  } else {
    res.status(404).json();
  }
};

const createAppointment = async (req, res, next) => {
  try {
    console.log('appointmentsController.createAppointment');
    const result = await AppointmentsCoordinator.createAppointment(req.body);
    res.status(200).json(result);
  } catch (ex) {
    next(ex);
  }
};

const deleteAppointment = async (req, res, next) => {
  console.log('appointmentsController.deleteAppointment');
  
  const deleteResult = await AppointmentsCoordinator.deleteAppointment(req.params.id);

  if (deleteResult) {
    res.status(204).json(deleteResult);
  } else {
    res.status(404).json();
  }
};

const replaceAppointment = async (req, res, next) => {
  console.log('appointmentsController.replaceAppointment');

  const replaceResult = await AppointmentsCoordinator.replaceAppointment(req.params.id, req.body);
  
  if (replaceResult) {
    res.status(200).json(replaceResult);
  } else {
    res.status(404).json();
  }
};

const updateAppointment = async (req, res, next) => {
  console.log('appointmentsController.updateAppointment');

  const updateResult = await AppointmentsCoordinator.updateAppointment(req.params.id, req.body);
  
  if (updateResult) {
    res.status(200).json(updateResult);
  } else {
    res.status(404).json();
  }
};

module.exports = {
  getAppointments,
  getAppointment,
  createAppointment,
  deleteAppointment,
  replaceAppointment,
  updateAppointment,
};
