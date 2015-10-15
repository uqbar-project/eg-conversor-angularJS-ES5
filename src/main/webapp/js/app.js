'use strict';

var app = angular.module('conversorApp', [])

/* Controllers */
app.controller('ConversorController', function (Conversor) {
	return new Conversor();
});
  
app.factory('Conversor', function($http) {
	return function()  {
		this.millas = NaN;
		this.kilometros = NaN;
		this.convertir = function() {
			this.kilometros = NaN;
			if(this.isValid()) {
			      $http.get('/convertir/' + this.millas)
		      		.success(function(result) { this.kilometros = result.kilometros; }.bind(this));
			}
		}	

		this.isValid = function(form) {
			return !isNaN(this.millas);
		}
	}
});