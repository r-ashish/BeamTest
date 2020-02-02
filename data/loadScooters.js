const Scooter = require('../models/scooter');
const scooterGenerator = require('./randomDataGenerator');
const mongoose = require('mongoose');
const mongoDbUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/db';

const scootersData = scooterGenerator();

mongoose.connect(mongoDbUrl, {
   useNewUrlParser: true, useUnifiedTopology: true 
}).then(() => {
    Scooter.collection.deleteMany({})
    .then(() => {
        Scooter.collection.insertMany(scootersData, (error, _) => {
            if(!error) {
                console.log(`Successfully loaded ${scootersData.length} scooters in db...`);
            } else{
                console.log(error.message);
            }
            mongoose.disconnect();
            process.exit();
        });
    });
}).catch(() => {
    console.log('Mongodb connection failed.');
});