const PlaylistModel = require('../models/PlaylistModel');


async function generatePlaylists(req, res) {
    try {
        const playlists = await PlaylistModel.insertMany([
            {
                name: 'Love',
                auditor: req.payload._id
            },
            {
                name: 'Best songs ever',
                auditor: req.payload._id
            },
            {
                name: 'Chill',
                auditor: req.payload._id
            }
        ]);
        res.status(200).json(playlists);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    generatePlaylists
}