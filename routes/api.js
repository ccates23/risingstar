var Itinerary = require("../models/itinerary");
var express = require('express');
var router = express.Router();

// This is your API controller, all post requests should come here
// POST /api/itinerary

var artists = [{
  artist: "Foo Bar"
}, {
  artist: "Foo Baz"
}];

router.get('/itinerary', function(req, res){
  // Delete this return when you get mongo working
  // return res.send(artists);


  Itinerary.findById({}, function (err,data) {
    res.send(data);
  });
});

router.get('/itinerary/:id', function(req, res){   
   var id = req.params.id;

   Itinerary.findById(id, function (err,data) {
    res.send(data);
  });
});

router.post('/itinerary', function(req, res){
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
  });

  itinerary.save(function (err, data) {
    var id = data._id
    if (err) throw err;
    // Something like this
    // Basically send down the new itinerary just created
    // res.status(201).json(itinerary);
    // res.redirect('/');
    res.redirect('/itinerary' + id);
  });
});

module.exports = router;