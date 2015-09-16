var Itinerary = require("../models/itinerary");
var express = require('express');
var router = express.Router();

router.post('/', function(req, res){
	console.log(req.body)
   var id = req.body.id;
   Itinerary.findById(id, function (err,data) {
    console.log('search response');
    console.log(data);
    res.send(data);

  })

})

module.exports = router;