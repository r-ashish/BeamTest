const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scooterSchema = new Schema({
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  model: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
}, { versionKey: false });

const Scooter = mongoose.model('Scooter', scooterSchema);

module.exports = Scooter;