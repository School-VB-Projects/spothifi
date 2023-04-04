const {Schema, model} = require('../../database');

/**
 * Entity of auditor
 * @typedef Auditor
 * @property {String} name
 * @property {String} mail
 * @property {String} password
 * @property {Number} age
 * @property {String} country
 */
const AuditorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    country: {
        type: String
    },
});

const Auditor = model('Auditor', AuditorSchema);

module.exports = Auditor;