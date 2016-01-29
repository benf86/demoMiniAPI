'use strict';

var options = {};
var app = require('express')();
var bodyParser = require('body-parser');

options.db = require('./db.js')();

var task = require('./task.js')(options);

var server = app.listen(3000);
console.log('Demo API listening on port 3000');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/task/', function (req, res) {
	task.getAll(req, res);
});

app.get('/task/:uuid', function (req, res) {
	task.get(req, res);
});

app.post('/task/', function (req, res) {
	task.create(req, res);
});

app.put('/task/:uuid', function (req, res) {
	task.update(req, res);
});

app.delete('/task/:uuid', function (req, res) {
	task.delete(req, res);
});
