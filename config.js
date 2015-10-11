/*jshint node:true*/
'use strict';

var config;

if (process.env.NODE_ENV === 'production') {
    config = require('./config_prod.js');
} else if (process.env.NODE_ENV === 'development') {
    config = require('./config_dev.js');
} else {
    // throw not found
}
module.exports = config;