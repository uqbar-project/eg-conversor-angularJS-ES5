'use strict';

var app = angular.module('conversorApp', [])

/* Controllers */
app.controller('ConversorController', function ($scope, Conversor) {
	$scope.conversor = new Conversor();
});
  
app.factory('Conversor', function($http) {
	return function()  {
		this.millas = NaN;
		this.kilometros = NaN;
		this.convertir = function() {
			if(this.isValid())
	      $http.get('/convertir/' + this.millas)
	      		.success(function(result) { this.kilometros = result.kilometros; }.bind(this));
		}	

		this.isValid = function(form) {
			return !isNaN(this.kilometros);
		}
	}
});