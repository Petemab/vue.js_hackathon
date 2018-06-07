const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: String,
  address: {type: String, required: true},
  description: String,
  book: {type: String, required: true},
  image: String,
  location: {
    lat: {type: Number, required: true},
    lng: {type: Number, required: true}
  },
  extract: String
});

module.exports = mongoose.model('Place', placeSchema);
