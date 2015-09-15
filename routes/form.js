var Itinerary = require("../models/itinerary");
var express = require('express');
var router = express.Router();


// post to /itinerary
router.post('/', function(req, res) {
  // var itinerary = new Itinerary({
  //   name: 'Dierks Bentley',         // request.body.name
  //   date: '10/1/2015',            // req.body.date
  //   travelers: ['Foo', 'Bar']


  // });
  var itinerary = new Itinerary({
  date: req.body.date,
  artist: req.body.artist,
  travelers: req.body.travelers,
  vendor: req.body.vendor,
  address: req.body.address,
  phone: req.body.phone,
  checkin: req.body.checkin,
  checkout: req.body.checkout,
  confirmation: req.body.confirmation,
  distance: req.body.distance,
  cost: req.body.cost,
  ccauth: req.body.ccauth,
  notes: req.body.notes
  /* Put in the rest of the schema */
})

  itinerary.save(function (err) {
    if (err) throw err;
    // Something like this
    // Basically send down the new itinerary just created
    // res.status(201).json(itinerary);
    res.redirect('/');
  });
});

module.exports = router;