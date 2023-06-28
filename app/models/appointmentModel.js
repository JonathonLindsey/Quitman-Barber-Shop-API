const db = require('../../lib/database');
const Constants = require('../../lib/constants');

class AppointmentsModel {
  static getAppointments = () => {
    console.log('\t\tAppointmentsModel.getAppointments');

    // TODO: Make this better
    return db.getDb().collection(Constants.COLLECTIONS.APPOINTMENTS).find({})
      .project({ _id: 0 }).toArray();
  };

  static getAppointment = (id) => {
    console.log(`\t\tAppointmentsModel.getAppointment :: ${id}`);

    return db.getDb().collection(Constants.COLLECTIONS.APPOINTMENTS)
      .findOne({ id }, {
        projection: { _id: 0 }
      });
  };

  static createAppointment = async (appointment) => {
    console.log('\t\tAppointmentsModel.createAppointment');

    await db.getDb().collection(Constants.COLLECTIONS.APPOINTMENTS)
      .insertOne(appointment);

    delete appointment._id;
    return appointment;
  };

  static deleteAppointment = async (id) => {
    console.log('\t\tAppointmentsModel.deleteAppointment');

    const deleteResult = await db.getDb().collection(Constants.COLLECTIONS.APPOINTMENTS)
      .deleteOne({ id });

    if (deleteResult.deletedCount === 0) {
      return false;
    }

    return true;
  };

  static replaceAppointment = async (id, appointment) => {
    console.log('\t\tAppointmentsModel.replaceAppointment');
    
    const result = await db.getDb().collection(Constants.COLLECTIONS.APPOINTMENTS)
      .replaceOne({ id }, appointment);

    if (result.matchedCount === 1) {
      return appointment;
    }

    return false;
  };

  static updateAppointment = async (id, appointment) => {
    console.log('\t\tAppointmentsModel.updateAppointment');

    const update = {};

    Object.keys(appointment).forEach((key) => {
      if (key === 'id') {
        return;
      }
      update[key] = appointment[key];
    });

    const updateResults = await db.getDb().collection(Constants.COLLECTIONS.APPOINTMENTS)
      .findOneAndUpdate({ id }, { $set: update }, { returnDocument: 'after' });
    
    if (updateResults.value) {
      delete updateResults.value._id;
      return updateResults.value;
    }
  
    return false;
  };
}

module.exports = AppointmentsModel;
