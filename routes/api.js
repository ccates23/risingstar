var Itinerary = require("../models/itinerary");
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var mandrillTransport = require('nodemailer-mandrill-transport');

// This is your API controller, all post requests should come here
// POST /api/itinerary

var transport = nodemailer.createTransport(mandrillTransport({
  auth: {
    apiKey: 'KXjnY9zIZHNLqY8hT82UTA'
  }
}));


router.get('/itinerary', function(req, res){
  Itinerary.find(function (err,data) {
    res.send(data);
  });
});

router.get('/itinerary/:id', function(req, res){
   var id = req.params.id;
    Itinerary.findById(id, function (err,data) {
    res.send(data);
  });
});

router.post('/itinerary/:id/email', function(req, res){
  var id = req.params.id;
  Itinerary.findById(id, function (err,data) {
    transport.sendMail({
      from: 'cates.chad@gmail.com',
      to: 'cates.chad@gmail.com',
      subject: 'Artist Itinerary',
      html: '<html>' +
'<h1>Rising Star Travel</h1>' +
'<h2>Itinerary</h2>' +
'<h3>'+data.artist+'</h3>' +
'<h3>'+data.date+'</h3>' +
'<ul>' +
'<li>Travelers: '+data.travelers+'</li>' +
'<li>Vendor: '+data.vendor+'</li>' +
'<li>Address: '+data.address+'</li>' +
'<li>Phone: '+data.phone+'</li>' +
'<li>Check In / Drop Off '+data.checkin+'</li>' +
'<li>Check Out / Pick Up '+data.checkout+'</li>' +
'<li>Confirmation: '+data.confirmation+'</li>' +
'<li>Distance: '+data.distance+'</li>' +
'<li>Cost: '+data.cost+'</li>' +
'<li>Credit Card Authorization: '+data.ccauth+'</li>' +
'<li>Notes: '+data.notes+'</li>' +
'</ul>'+
'</html>'
    }, function(err, info) {
      if (err) {
        throw err;
      } else {
        res.send(info)
      }
    });
  });
});

 router.put('/itinerary/:id', function(req, res) {
  var id = req.params.id;
  Itinerary.findById(id, function (err, data) {
    if (data) {
      data.date = req.body.date;
      data.artist = req.body.artist;
      data.travelers = req.body.travelers;
      data.vendor = req.body.vendor;
      data.address = req.body.address;
      data.phone = req.body.phone;
      data.checkin = req.body.checkin;
      data.checkout = req.body.checkout;
      data.confirmation = req.body.confirmation;
      data.distance = req.body.distance;
      data.cost = req.body.cost;
      data.ccauth = req.body.ccauth;
      data.notes = req.body.notes;

      data.save(function (err, data) {
        if (err) throw err;
        res.redirect('/itinerary/create');
      });
    };
  })
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
    res.redirect('/itinerary' + id);
  });
});

module.exports = router;