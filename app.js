//  required variables

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var api = require('./routes/api');
var exphbs = require("express-handlebars");
var nodemailer = require('nodemailer');
var mandrillTransport = require('nodemailer-mandrill-transport');

// Register `hbs` as our view engine using its bound `engine()` function.
var hbs = exphbs.create({
    defaultLayout: "main",
    helpers: {},
    // Uses multiple partials dirs, templates in "shared/templates/" are shared
    // with the client-side of the app (see below).
    partialsDir: [
        "views/partials/"
    ],
    extname: ".hbs"
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

app.use(bodyParser.json());
app.use(express.static('www'));
app.use('/api', api);
app.use('/', function (req, res) {
    res.render('index');
});

var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%d', host, port);
});

