// var mongo = require('mongodb').MongoClient;

// var url = process.env.MONGODB_URL || 'mongodb://localhost:27017/risingstar';

// if (!global.db) {
// mongo.connect(url, function(err, db){
// 	global.db = db;
// });
// }

var mongoose = require('mongoose');
var MONGODB_USER = process.env.MONGOLAB_USER || 'risingstar';
var MONGODB_PASSWORD = process.env.MONGOLAB_PASS || 'takamine';
var DATABASE_URL = process.env.MONGODB_URL ||
  'mongodb://' +
  MONGODB_USER +
  ':' + MONGODB_PASSWORD +
  '@ds051913.mongolab.com:51913/risingstar';
mongoose.connect('mongodb://' + DATABASE_URL + '/risingstar');
console.log('CONNECTED TO DATABASE: ' + DATABASE_URL);