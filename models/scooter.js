const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScooterSchema = new Schema({
  location: {
    type: { type: String },
    coordinates: [] // lng, lat
  },
  model: { type: String, required: true },

}, 
{
  versionKey: false,
  timestamps: true,
  toJSON: {
    transform: (doc, ret) => {
      ret.lat = ret.location.coordinates[1]
      ret.lng = ret.location.coordinates[0]

      delete ret.location;
    }
  }
});

ScooterSchema.index({ location: "2dsphere" });

const Scooter = mongoose.model('Scooter', ScooterSchema);

Scooter.findNearest = (radius, lat, lng) => {
  return Scooter.find({
    location: {
        $near: {
            $maxDistance: radius*1000, //kms to metres
            $geometry: {
                type: "Point",
                coordinates: [lng, lat]
            }
        }
    }
  });
}

module.exports = Scooter;