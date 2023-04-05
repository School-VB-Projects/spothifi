const express = require('express');
const router = express.Router();

const SeedController = require('../controllers/SeedController');
const checkJwt = require('../../middlewares/checkJwt');

router.post('/generate-playlists', checkJwt, SeedController.generatePlaylists);

module.exports = router;