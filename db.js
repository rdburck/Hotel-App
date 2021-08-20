const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://rdburck:Wil5h1r3@cluster0.eai4m.mongodb.net/mern-hotel';

mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true});

var connection = mongoose.connection;

connection.on('error', () => {
    console.log('mongo connection failed');
});

connection.on('connection', () => {
    console.log('mongo connection successful');
});

module.exports = mongoose;

