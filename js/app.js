'use strict';

var app = angular.module('conversorApp', [])

app.controller('ConversorController', function () {
	this.millas = 0;
	this.kilometros = function() {
		return this.millas * 1.60934
	}
});
