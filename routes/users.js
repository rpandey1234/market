var models  = require('../models');
var _ = require('lodash');

exports.getAll = function(req, res) {
    models.users.findAll({
        inclide: [models.goods]
    }).then(function(users) {
        res.json(users);
    });
};

exports.addForm = function(req, res) {
    res.render('addUser');
};

exports.add = function(req, res) {
    console.log(req.body);
    //debugger;
    models.users.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name
    }).then(function(user) {
        console.log("user has been created", user);
        res.send();
    });
};