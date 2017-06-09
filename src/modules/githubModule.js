const http = require('https');

var getGitHubUser = function (userName, callback) {

    var options = {
        hostname: 'api.github.com',
        posrt: 443,
        path: `/users/${userName}`,
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

module.exports = getGitHubUser;
