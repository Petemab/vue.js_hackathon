const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: String,
  address: String,
  description: String,
  location: {
    lat: Number,
    lng: Number
  },
  image: String
});

module.exports = mongoose.model('Place', placeSchema);
