const mongoose = require('mongoose');
//schema is structure of data that we're sending to our backend
const Schema = mongoose.Schema();

const TestSchema = new Schema({
    test: {
        type: String,
        unique: true,
        trim: true,
        require: true,
    },
    number: Number,
})

const TestModel = mongoose.model('TestCollection', TestSchema);

module.exports = TestModel;

