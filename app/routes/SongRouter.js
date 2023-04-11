const express = require('express');
const router = express.Router();

const SongController = require('../controllers/SongController');
const checkJwt = require('../../middlewares/checkJwt');

/**
 * Response with 'Listening {song}'
 * @route POST /listen/:id
 * @summary Current auditor listen a song (requires to be connected)
 * @group Specials
 * @return {String} 200 - Listening with success
 * @returns {String} 500 - An error message
 */
router.post('/listen/:id', checkJwt, SongController.listen);

/**
 * Response with songs matches with query
 * @route GET /search
 * @summary Search a song among all
 * @group Specials
 * @return {String} 200 - Search running with success
 * @returns {String} 500 - An error message
 */
router.get('/search', SongController.search);

module.exports = router;