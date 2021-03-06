var express = require('express');
var github = require('../modules/github');

var func = (nav) => {
    const windowTitle = 'GitHub user information';

    var gitHubRoute = express.Router();

    gitHubRoute.route('/')
        .get((req, resp) => {
            resp.render('github/index', {
                title: windowTitle,
                nav: nav
            });

        });

    gitHubRoute.route('/user')
        .get((req, resp) => {
            github(req.query.name, (err, data) => {
                data.show_limit = 5;
                resp.render('github/user', data);
            });
        });

    return gitHubRoute;
}

module.exports = func;
