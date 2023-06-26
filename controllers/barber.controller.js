const DataCoordinator = require('../coordinators/barber.coordinator');

const getData = async (req, res, next) => {
    console.log('dataController.getData');

    const result = DataCoordinator.getData();
    res.status(200).send(result);
};

module.exports = {
    getData,
};