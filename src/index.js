var koa = require('koa');
var bodyParser = require('koa-bodyparser');
var Router = require('koa-router');
var config = require('../config');
var router = require('./router');

var app = koa();

var requests = 0;
app.use(function* (next) {
	requests++;
	yield next;
});

app.use(bodyParser());

app.use(router.routes());

module.exports = app;

