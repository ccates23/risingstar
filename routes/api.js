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
  return res.send(artists);
  

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
  // Remove this when you're using mongoose
  artists.push(req.body);
  return res.status(201).send(req.body);


  var itinerary = new Itinerary({
    name: req.body.name,
    date: req.body.date
    /* ... */
  });

  itinerary.save(function (err) {
    if (err) throw err;
    // Something like this
    // Basically send down the new itinerary just created
    response.status(201).json(itinerary);
  });
});

module.exports = router;
