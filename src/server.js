var express = require('express'),
    bodyParser = require('body-parser');

require('./models');

var app = express();

app.use(bodyParser.json());

app.use(express.static('public'));

require('./routes')(app);

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});