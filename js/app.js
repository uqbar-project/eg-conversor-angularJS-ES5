'use strict';

var app = angular.module('conversorApp', [])

/* Controllers */
app.controller('conversorCtrl', function () {
	/* scope */
	this.millas = 0;
	this.kilometros = ' <ingrese millas> '
		
	this.convertir = function() {
		this.kilometros = this.millas * 1.60934
	}
});
  
  
