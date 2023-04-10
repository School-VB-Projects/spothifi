const express = require('express');
const router = express.Router();

const SeedController = require('../controllers/SeedController');
const checkJwt = require('../../middlewares/checkJwt');

/**
 * Response with data generated
 * @route POST /generate-data
 * @summary Generating artists, albums, songs and playlists
 * @group Seed
 * @return {String} 200 - Generated with success
 * @returns {String} 500 - An error message
 */
router.post('/generate-data', checkJwt, SeedController.generateData);

module.exports = router;