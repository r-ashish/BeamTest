const express = require('express');
const scooterController = require('../controllers/scooter');
const router = express.Router();

router.get('/', scooterController.getScooters);
router.get('/:id', scooterController.getScooter);
router.post('/', scooterController.createScooter);


module.exports = router;
