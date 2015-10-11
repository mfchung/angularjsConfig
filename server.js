/*jshint node:true*/
/*jshint esnext:true*/
'use strict';

var config = require('./config');
var koa = require('koa')();
var router = require('koa-router')();
var send = require('koa-send');

console.log(config);

router.get('/', function *(next) {
	console.log('yielding index.html');
	yield send(this, __dirname + '/index.html');
});

router.get('/config.js', function *(next) {
	console.log('yielding ' + config.angularConfig);
	yield send(this, __dirname + '/' + config.angularConfig);
});

koa.use(router.routes());
koa.listen(8080);