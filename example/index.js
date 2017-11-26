'use strict';
const express = require("express");
const port = 3000;
const address = "127.0.0.1";

var app = express();

app.use('/src', express.static('src'));
app.use('/node_modules', express.static('node_modules'));

app.set('view engine', 'pug');
app.set('views', './templates');

app.get('/', function(request, response) {
    var context = {
        title: 'Angular Kit Pagination Example',
    };
    response.render('index', context);
});

app.listen(port, address, function () {
    console.log('Listening at http://%s:%s', address, port);
});
