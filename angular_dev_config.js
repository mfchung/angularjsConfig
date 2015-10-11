/*jshint node:true*/
/*global angular:false*/
'use strict';

var conf = angular.module('configuration', []);

var confData = {
	'settings': {
		'environment': 'development'
	}
};

angular.forEach(confData, function(key, value) {
    conf.constant(value, key);
});