'use strict';

var app = angular.module('conversorApp', [])

/* Controllers */
app.controller('ConversorController', function ($scope) {
	$scope.conversor = new Conversor();
});
  
function Conversor()  {
	this.millas = NaN;
	this.kilometros = NaN;
	this.convertir = function() {
		this.kilometros =  this.millas * 1.60934
	}	

	this.isValid = function(form) {
		return !isNaN(this.kilometros);
	}
}