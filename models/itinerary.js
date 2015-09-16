var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/risingstar');

var Itinerary = mongoose.model('Itinerary', {
  date: Date,
  artist: String,
  travelers: Array,
  vendor: String,
  address: String,
  phone: String,
  checkin: String,
  checkout: String,
  confirmation: String,
  distance: String,
  cost: String,
  ccauth: String,
  notes: String
  /* Put in the rest of the schema */
});

module.exports = Itinerary;