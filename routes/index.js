var Itinerary = require("../models/itinerary");
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.sendFile('templates/form.html', {root: 'views'});
});



// post to /itinerary
router.post('/', function(request, response) {
  var itinerary = new Itinerary({ 
    name: 'Dirks Bently',         // request.body.name
    date: '10/1/2015',            // request.body.date
    travelers: ['Foo', 'Bar'],
    
  });
  
  itinerary.save(function (err) {
    if (err) throw err;
    // Something like this
    // Basically send down the new itinerary just created
    response.status(201).json(itinerary);
  });  
});

module.exports = router;