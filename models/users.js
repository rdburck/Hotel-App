const mongoose = require('mongoose');
//schema is structure of data that we're sending to our backend
const Schema = mongoose.Schema({

    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,    
    },
    
    userName: {
        type: String,
        required: true,    
    },

    password: {
        type: String,
        required: true,    
    },

    phoneNumber: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
});

const usersModel = mongoose.model('users', Schema);

module.exports = usersModel;