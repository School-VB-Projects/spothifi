const SongModel = require('../models/SongModel');
const ListeningModel = require('../models/ListeningModel');
const {now} = require("mongoose");

async function listen(req, res) {
    try {
        const song = await SongModel.findById({
            _id: req.params.id
        });

        const listening = new ListeningModel({
            auditor: req.payload._id,
            song: song._id,
            listenDate: new Date(now())
        });

        await listening.save();

        res.status(200).json({
            message: `Listening ${song.name}`
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

async function search(req, res) {
    try {
        const songs = await SongModel.find({
            name: {
                $regex: new RegExp(req.query.query, 'i')
            }
        })
        res.status(200).json({songs})
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    listen,
    search
}