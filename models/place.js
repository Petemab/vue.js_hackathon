const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: String,
  address: String,
  description: String,
  book: String,
  image: String,
  location: {
    lat: Number,
    lng: Number
  },
  extract: String
});

module.exports = mongoose.model('Place', placeSchema);
