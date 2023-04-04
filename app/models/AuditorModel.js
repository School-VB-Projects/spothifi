const {Schema, model} = require('../../database');

/**
 * Entity of auditor
 * @typedef Auditor
 * @property {String} name
 * @property {String} mail
 * @property {String} authenticationString
 * @property {Number} age
 * @property {String} country
 */
const AuditorSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    mail: {
        type: String,
        required: true,
        unique: true
    },
    authenticationString: {
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