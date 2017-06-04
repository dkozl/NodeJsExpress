var express = require('express');

var routes = function (nav) {
    
    var router = express.Router();
    
    router.route('/route1')
        .get(function (req, resp) {
            resp.render('index', {
                title: 'Route 1',
                nav: nav
            });
        });

    router.route('/route2')
        .get(function (req, resp) {
            resp.render('index', {
                title: 'Route 2',
                nav: nav
            });
        });
    
    return router;
}

module.exports = routes;
