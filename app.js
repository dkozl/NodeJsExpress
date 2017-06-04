var express = require('express');

var app = express();

var port = process.env.PORT || 8090;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function (req, resp) {
    resp.render('index', {
        title: 'Hello world'
    });
});

app.listen(port, function (err) {
    console.log('port ' + port);
});
