const PlaylistModel = require('../models/PlaylistModel');

async function getMyPlaylists(req, res) {
    try {
        const playlists = await PlaylistModel.find({
            auditor: req.payload._id
        });

        return res.status(200).json(playlists);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {
    getMyPlaylists
}