const PlaylistModel = require('../models/PlaylistModel');
const SongModel = require('../models/SongModel');

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

async function createPlaylist(req, res) {
    try {
        const {name, songs} = req.body;

        const newPlaylist = new PlaylistModel({
            name,
            auditor: req.payload._id
        })

        if (songs) {
            for (let i = 0; i < songs.length; i++) {
                const new_song = await SongModel.findOne({
                    name: songs[i].name
                });
                if (new_song) {
                    newPlaylist.songs.push(new_song)
                }
            }
        }

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

async function updatePlaylist(req, res) {
    try {
        const {name} = req.body;
        const playlist = await PlaylistModel.findById({
            _id: req.params.id,
            auditor: req.payload._id
        });

        playlist.name = name

        await playlist.save();

        res.status(200).json({
            message: 'Playlist updated successfully'
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

async function deletePlaylist(req, res) {
    try {
        const playlist = await PlaylistModel.findById({
            _id: req.params.id,
            auditor: req.payload._id
        });

        await playlist.deleteOne();

        res.status(200).json({
            message: 'Playlist deleted successfully'
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {
    createPlaylist,
    getMyPlaylists,
    updatePlaylist,
    deletePlaylist
}