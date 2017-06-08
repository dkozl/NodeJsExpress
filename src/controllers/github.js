var express = require('express');

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
            resp.send('user: ' + req.query.name);
        });

    return gitHubRoute;
}

module.exports = func;
