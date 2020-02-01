const Scooter = require('../models/scooter');

exports.getScooters = (req, res) => {
    const lat = req.query.lat;
    const lng = req.query.lng;
    const numScooters = req.query.numScooters;
    const radius = req.query.radius;

    Scooter.find({}, function(err, scooters) {
        if (!err){
            res.send(scooters);
        } else {
            res.send(err.message)
        };
    });
}

exports.getScooter = (req, res) => {
    res.send(`Scooter #${req.params.id} coming soon!`);
}

exports.createScooter = (req, res) => {
    res.send(`Scooter creation is not supported yet!`);
}