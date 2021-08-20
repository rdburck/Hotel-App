const express = require('express');
const app = express();
const routes = require('./routes');


const mongoose = require('mongoose');
require ('dotenv').config();

const dbconfig = require('./db');

const PORT = process.env.PORT || 3001;

mongoose.connect(
    process.env.MONGO_DB_URL || 
    'mongodb://locathost:2701/lms-project',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }
)
app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use('/api/rooms', apiRoutes);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
};

app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`);
});
