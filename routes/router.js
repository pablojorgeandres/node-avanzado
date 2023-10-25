const express = require('express');
const router = express.Router();

const humberController = require('../controllers/humber');
const randomNumberController = require('../controllers/random');

router.get('/aguanteHumber', humberController.aguanteHumber);
router.get('/randomNumber', randomNumberController.getRandomNumber);

module.exports = router;