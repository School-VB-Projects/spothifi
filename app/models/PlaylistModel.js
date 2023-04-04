const {Schema, model} = require('../../database');

/**
 * Entity of playlist
 * @typedef Playlist
 * @property {String} name
 * @property {Auditor.model} auditor
 * @property {Array.<Song>} songs
 */
const PlaylistSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    auditor: {
        type: Schema.Types.ObjectId,
        ref: 'Auditor',
        required: true
    },
    songs: [{
        type: Schema.Types.ObjectId,
        ref: 'Song'
    }],
});

const Playlist = model('Playlist', PlaylistSchema);

module.exports = Playlist;