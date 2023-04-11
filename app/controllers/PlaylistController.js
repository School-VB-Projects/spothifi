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
        const {name, songs} = req.body;
        const playlist = await PlaylistModel.findById({
            _id: req.params.id,
            auditor: req.payload._id
        });

        playlist.name = name

        if (songs) {
            let new_songs = [];
            for (let i = 0; i < songs.length; i++) {
                const new_song = await SongModel.findOne({
                    name: songs[i].name
                });
                if (new_song) {
                    new_songs.push(new_song)
                }
            }
            if (new_songs.length) {
                playlist.songs = new_songs
            }
        }

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

async function addSong(req, res) {
    try {
        const playlist = await PlaylistModel.findById({
            _id: req.params.id,
            auditor: req.payload._id
        })

        if (!playlist) {
            res.status(400).json({
                message: "Playlist not found"
            })
        }

        const song = await SongModel.findById({
            _id: req.query.song
        })

        if (!song) {
            res.status(400).json({
                message: "Song not found"
            })
        }

        if(playlist.songs.toString().includes(song._id)) {
            res.status(400).json({
                message: `${song.name} already added successfully to ${playlist.name}`
            })
        } else {
            playlist.songs.push(song._id);
            song.playlists.push(playlist._id);
            await playlist.save();
            await song.save();

            res.status(200).json({
                message: `${song.name} added successfully to ${playlist.name}`
            })
        }

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
    deletePlaylist,
    addSong
}