const express = require('express');
const scooterRouter = require('./scooter');
const router = express.Router();

router.use('/scooters', scooterRouter)

module.exports = router;