var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
    models.users.findAll({
        include: [ ]
    }).then(function(users) {
        res.render('pages/users', {
            title: 'Express',
            users: users
        });
    });
});

module.exports = router;