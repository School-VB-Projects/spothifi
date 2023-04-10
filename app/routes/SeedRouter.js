const express = require('express');
const router = express.Router();

const SeedController = require('../controllers/SeedController');
const checkJwt = require('../../middlewares/checkJwt');

router.post('/generate-data', checkJwt, SeedController.generateData);

module.exports = router;