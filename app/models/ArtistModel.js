const {Schema, model} = require('../../database');

/**
 * Entity of artist
 * @typedef Artist
 * @property {String} name
 * @property {String} category
 * @property {Array.<Album>} albums
 */
const ArtistSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true,
        enum: ["rap", "edm", "rock", "classic", "punk", "jazz", "various", "pop", "rnb"]
    },
    albums: [{
        type: Schema.Types.ObjectId,
        ref: 'Albums'
    }],
});

const Artist = model('Playlist', ArtistSchema);

module.exports = Artist;