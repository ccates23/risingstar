var Itinerary = require("../models/itinerary");
var express = require('express');
var router = express.Router();


router.get('/:id', function(req, res){
  var id = req.params.id;
  // Itinerary.findById(id, function (err,data) {
  //   console.log('search response');
  //   console.log(data);
  //   res.send(data);

  // })
   res.sendFile('templates/table.html', {root: 'views'});
})


// post to /itinerary
router.post('/itinerary', function(req, res) {

  var itinerary = new Itinerary(req.body)// {
//   date: req.body.date,
//   artist: req.body.artist,
//   travelers: req.body.travelers,
//   vendor: req.body.vendor,
//   address: req.body.address,
//   phone: req.body.phone,
//   checkin: req.body.checkin,
//   checkout: req.body.checkout,
//   confirmation: req.body.confirmation,
//   distance: req.body.distance,
//   cost: req.body.cost,
//   ccauth: req.body.ccauth,
//   notes: req.body.notes
//   /* Put in the rest of the schema */



});

module.exports = router;