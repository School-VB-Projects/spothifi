const {Schema, model} = require('../../database');

/**
 * Entity of song
 * @typedef Song
 * @property {String} name
 * @property {Number} price
 * @property {Album.model} album
 * @property {Array.<Playlist>} playlists
 */
const SongSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    album: {
        type: Schema.Types.ObjectId,
        ref: 'Album'
    },
    playlists: [{
        type: Schema.Types.ObjectId,
        ref: 'Playlist'
    }],
});

const Song = model('Song', SongSchema);

module.exports = Song;