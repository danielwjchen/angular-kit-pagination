'use strict';
const express = require("express");
const port = 3000;
const address = "127.0.0.1";

var app = express();

app.use('/dist', express.static('./dist'));
app.use('/src', express.static('./src'));
app.use('/example/src', express.static('./example/src'));
app.use('/example/dist', express.static('./example/dist'));
app.use('/node_modules', express.static('./node_modules'));

app.set('view engine', 'pug');
app.set('views', './example/templates');

app.get('/', function(request, response) {
    var context = {
        title: 'Angular Kit Pagination Example',
    };
    response.render('index', context);
});

module.exports = app;