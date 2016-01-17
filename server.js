'use strict';

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('pages/index');
});


var port = app.get('port');
var server = app.listen(port, function () {
    console.log('Running on http://localhost:%s', port);
});
