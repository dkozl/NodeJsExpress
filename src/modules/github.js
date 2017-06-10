const http = require('https');
const url = require('url');
const _ = require('underscore');

var getGitHubUser = function (userName, callback) {

    var getData = function (desturl, callback) {
        var destinfo = url.parse(desturl);

        var options = {
            hostname: destinfo.hostname,
            port: 443,
            path: destinfo.path,
            method: 'GET',
            headers: {
                'Accept': '*/*',
                'User-Agent': 'Mozilla / 5.0(Windows NT 6.1; WOW64) AppleWebKit / 537.36(KHTML, like Gecko) Chrome / 52.0.2743.116 Safari / 537.36'

            }
        };

        var response = '';

        http.get(options, (res) => {
            res.on('error', (err) => callback(err));
            res.on('data', (chunk) => response += chunk.toString('utf-8'));
            res.on('end', () => {
                callback(null, JSON.parse(response));
            });
        });
    }

    getData(`https://api.github.com/users/${userName}`, function (err, user) {
        getData(user.repos_url, function (err, repos) {
            callback(null, {
                user: user,
                repos: _.chain(repos)
                    .sortBy('id')
                    .reverse()
                    .sortBy('stargazers_count')
                    .reverse()
                    .value()
            });
        });
    });
}

module.exports = getGitHubUser;
