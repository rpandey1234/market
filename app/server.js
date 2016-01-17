'use strict';

var express = require('express');
<<<<<<< 85a9c429d40cc0b54709f1b4abf2abe928e8960a
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello World');
=======

// Constants
var PORT = process.env.PORT || 8080;

// App
var app = express();
app.get('/', function (req, res) {
    res.send('Hello Rohan\n');
>>>>>>> heroku configs
});



var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Running on http://localhost:%s', port);

});
