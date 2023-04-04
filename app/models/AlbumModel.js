const {Schema, model} = require('../../database');

/**
 * Entity of album
 * @typedef Album
 * @property {String} name
 * @property {Date} releaseDate
 * @property {Array.<Artist>} artists
 */
const AlbumSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    },
    artists: [{
        type: Schema.Types.ObjectId,
        ref: 'Artist'
    }],
});

const Album = model('Album', AlbumSchema);

module.exports = Album;