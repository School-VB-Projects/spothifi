const {Schema, model} = require('../../database');

/**
 * Entity of listening
 * @typedef Listening
 * @property {String} name
 * @property {Auditor.model} auditor
 * @property {Song.model} song
 * @property {Date} listenDate
 */
const ListeningSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    auditor: {
        type: Schema.Types.ObjectId,
        ref: 'Auditor',
        required: true
    },
    song: {
        type: Schema.Types.ObjectId,
        ref: 'Song',
        required: true
    },
    listenDate: {
        type: Date,
        required: true
    },
});

const Listening = model('Listening', ListeningSchema);

module.exports = Listening;