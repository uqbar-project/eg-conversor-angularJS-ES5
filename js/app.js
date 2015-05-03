'use strict';

var app = angular.module('conversorApp', [])

/* Controllers */
app.controller('ConversorController', function ($scope) {
	$scope.conversor = new Conversor();
});
  
function Conversor()  {
	this.millas = 0;
	this.kilometros = '';
	this.convertir = function() {
		this.kilometros =  this.millas * 1.60934
	}	
}
  
