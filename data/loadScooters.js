const Scooter = require('../models/scooter');
const scootersData = require('./scootersFixture');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db', {
   useNewUrlParser: true, useUnifiedTopology: true 
}).then(() => {
    Scooter.collection.insertMany(scootersData, (error, _) => {
        if(!error) {
            console.log(`Successfully loaded ${scootersData.length} scooters in db...`);
        } else{
            console.log(error.message);
        }
        mongoose.disconnect();
        process.exit();
    });
}).catch(() => {
    console.log('Mongodb connection failed.');
});