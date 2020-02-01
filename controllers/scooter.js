
exports.getScooters = (req, res) => {
    const lat = req.query.lat;
    const lng = req.query.lng;
    const numScooters = req.query.numScooters;
    const radius = req.query.radius;
    res.send(`Scooter list coming soon!`);
}

exports.getScooter = (req, res) => {
    res.send(`Scooter #${req.params.id} coming soon!`);
}

exports.createScooter = (req, res) => {
    res.send(`Scooter creation is not supported yet!`);
}