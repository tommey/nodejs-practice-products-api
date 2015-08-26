var koa = require('koa');
var bodyParser = require('koa-bodyparser');
var Router = require('koa-router');
var config = require('../config');
var router = require('./router');

var app = koa();

app.use(function* (next) {
        var start = new Date();
        console.log('Request', this.method, this.path, start);
        yield next;
        console.log('Request processed in', (new Date()).getTime() - start.getTime(), 'ms');
});

var requests = 0;
app.use(function* (next) {
	requests++;
	yield next;
});

app.use(bodyParser());

app.use(router.routes());

module.exports = app;

