const {Schema, model} = require('../../database');

/**
 * Entity of artist
 * @typedef Artist
 * @property {String} name
 * @property {String} category
 * @property {ObjectId} albums
 */
const ArtistSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["rap", "EDM", "rock", "classic", "punk", "jazz", "various", "pop", "rnb"]
    },
    albums: [{
        type: Schema.Types.ObjectId,
        ref: 'Albums'
    }],
});

const Artist = model('Playlist', ArtistSchema);

module.exports = Artist;