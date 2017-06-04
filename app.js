var express = require('express');
var nav = require('./src/routes/nav.json');

var app = express();

var port = process.env.PORT || 8090;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

var router = require('./src/routes/routes')(nav);

app.use('/', router);

app.get('/', function (req, resp) {
    resp.render('index', {
        title: 'Hello world',
        nav: nav
    });
});

app.listen(port, function (err) {
    console.log('port ' + port);
});
