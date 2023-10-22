const express = require('express');
const router = express.Router();

const humberController = require('../controllers/humber');

router.get('/randomNumber', null);

router.get('/aguanteHumber', humberController.aguanteHumber);


module.exports = router;