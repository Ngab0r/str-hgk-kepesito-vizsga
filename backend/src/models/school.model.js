/**
 * Exercise: make School mongoose model
 */
const mongoose = require('mongoose');

const School = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    classrooms: {
        type: [string],
        required: false
    }
}, {
    timestamps: true
});

module.exports = new mongoose.model('School', SchoolSchema, 'school');
