const express = require('express');
const dataController = require('../controllers/barber.controller')
const router = express.Router();

router.get('/', dataController.getData);

module.exports = router;