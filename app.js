var express = require('express');

var app = express();

var port = process.env.PORT || 8090;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function (req, resp) {
    resp.send('<html><body><p>Hello world</p></body></html>')
});

app.listen(port, function (err) {
    console.log('port ' + port);
});
