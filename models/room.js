const mongoose = require('mongoose');
//schema is structure of data that we're sending to our backend
const Schema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    occupancy: {
        type: Number,
        required: true,    
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    nightlyRate: {
        type: Number,
        required: true,
    },
    imageURLs: [],
    currentbookings: [],
    type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    timestamps: {
        type: Boolean,
        default: true,
    }
});

const roomModel = mongoose.model('rooms', Schema);

module.exports = roomModel;
