var http = require('http'),
    fs = require('fs'),
    express = require('express'),
    app = express();


app.use(express.static(__dirname + '/dist'));

app.get('*', function(req, res) {
        res.sendFile(__dirname + '/dist/index.html');
    })
    .listen(9000);
