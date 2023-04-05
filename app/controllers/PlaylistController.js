const PlaylistModel = require('../models/PlaylistModel');

async function createPlaylist(req, res) {
    try {
        const {name} = req.body;

        const newPlaylist = new PlaylistModel({
            name,
            auditor: req.payload._id
        })

        await newPlaylist.save();

        res.json({
            message: "Playlist created successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

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
    createPlaylist,
    getMyPlaylists
}