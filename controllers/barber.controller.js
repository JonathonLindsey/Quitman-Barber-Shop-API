const getData = async (req, res, next) => {
    console.log('dataController : getData');
    res.sendStatus(200);
};

module.exports = {
    getData,
};