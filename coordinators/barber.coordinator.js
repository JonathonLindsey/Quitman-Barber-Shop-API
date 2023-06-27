const DataModel = require('../models/data.model');

class DataCoordinator {
   static getData = () => {
    console.log('\t DataCoordinator.getData');
    return DataModel.getData();
   };
}

module.exports = DataCoordinator;