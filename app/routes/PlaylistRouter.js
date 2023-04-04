const express = require('express');
const router = express.Router();

const PlaylistController = require('../controllers/PlaylistController');
const checkJwt = require('../../middlewares/checkJwt');

/**
 * Returns all playlists of the current auditor
 * @route GET /playlists
 * @summary Response with playlists of current user
 * @group Playlists
 * @return {String} 200 - Get playlists with success
 * @returns {String} 500 - An error message
 */
router.get('/playlists', checkJwt, PlaylistController.getMyPlaylists);

module.exports = router;