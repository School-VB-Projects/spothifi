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

        return res.status(200).json(`Listening song ${song.name}`);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {
    listen
}