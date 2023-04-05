const express = require('express');
const router = express.Router();

const PlaylistController = require('../controllers/PlaylistController');
const checkJwt = require('../../middlewares/checkJwt');

/**
 * Response with 'Playlist created successfully'
 * @route POST /playlists/new
 * @summary Create a new playlist for current auditor
 * @group Playlists
 * @param {Playlist.model} object.body.required Object containing properties to insert
 * @return {String} 200 - Created with success
 * @returns {String} 500 - An error message
 */
router.post('/new', checkJwt, PlaylistController.createPlaylist);

/**
 * Response with playlists of current user
 * @route GET /playlists
 * @summary Returns all playlists of the current auditor
 * @group Playlists
 * @return {String} 200 - Get playlists with success
 * @returns {String} 500 - An error message
 */
router.get('/', checkJwt, PlaylistController.getMyPlaylists);

module.exports = router;