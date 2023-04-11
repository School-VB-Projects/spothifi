const express = require('express');
const router = express.Router();

const PlaylistController = require('../controllers/PlaylistController');
const checkJwt = require('../../middlewares/checkJwt');

/**
 * Response with 'Playlist created successfully'
 * @route POST /playlists/new
 * @summary Create a new playlist for current auditor (requires to be connected)
 * @group Playlists
 * @param {Playlist.model} object.body.required Object containing properties to insert
 * @return {String} 200 - Created with success
 * @returns {String} 500 - An error message
 */
router.post('/new', checkJwt, PlaylistController.createPlaylist);

/**
 * Response with playlists of current user
 * @route GET /playlists
 * @summary Returns all playlists of the current auditor (requires to be connected)
 * @group Playlists
 * @return {String} 200 - Get playlists with success
 * @returns {String} 500 - An error message
 */
router.get('/', checkJwt, PlaylistController.getMyPlaylists);

/**
 * Response with 'Playlist updated successfully'
 * @route PUT /playlists/:id
 * @summary Update an existing playlist for current auditor (requires to be connected)
 * @group Playlists
 * @param {Playlist.model} object.body.required Object containing properties to insert
 * @return {String} 200 - Updated with success
 * @returns {String} 500 - An error message
 */
router.put('/:id', checkJwt, PlaylistController.updatePlaylist);

/**
 * Response with 'Playlist deleted successfully'
 * @route DELETE /playlists/:id
 * @summary Delete one playlist of current auditor (requires to be connected)
 * @group Playlists
 * @return {String} 200 - Deleted with success
 * @returns {String} 500 - An error message
 */
router.delete('/:id', checkJwt, PlaylistController.deletePlaylist);

/**
 * Response with '{song} added successfully to {playlist}'
 * @route PATCH /playlists/:id/add?song
 * @summary Affect one song to one available playlist (requires to be connected)
 * @group Specials
 * @return {String} 200 - Affected with success
 * @returns {String} 500 - An error message
 */
router.patch('/:id/add', checkJwt, PlaylistController.addSong);

/**
 * Response with '{song} removed successfully to {playlist}'
 * @route PATCH /playlists/:id/remove?song
 * @summary Remove one song to one available playlist (requires to be connected)
 * @group Specials
 * @return {String} 200 - Removed with success
 * @returns {String} 500 - An error message
 */
router.patch('/:id/remove', checkJwt, PlaylistController.removeSong);


module.exports = router;