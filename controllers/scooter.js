const Scooter = require('../models/scooter');

exports.getScooters = (req, res) => {
    const lat = req.query.lat;
    const lng = req.query.lng;

    if(!lat || !lng) {
        res.send({success: false, msg: 'lat/ lng missing'});
        return;
    }

    const numScooters = parseInt(req.query.count) || 50; // default 50 scooters
    const radius = parseFloat(req.query.radius) || 5; // default 5km

    Scooter.findNearest(radius, lat, lng)
    .limit(numScooters)
    .exec((err, scooters) => {
        if (!err){
            res.send(scooters);
        } else {
            res.send(err.message);
        };
    });
}

exports.getScooter = (req, res) => {
    res.send(`Scooter #${req.params.id} coming soon!`);
}

exports.createScooter = (req, res) => {
    res.send(`Scooter creation is not supported yet!`);
}