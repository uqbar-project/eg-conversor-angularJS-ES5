'use strict';

var app = angular.module('conversorApp', [])

/* Controllers */
app.controller('ConversorController', function ($scope) {
	/* scope */
	$scope.millas = 0;
	$scope.kilometros = ' <ingrese millas> '
		
	$scope.convertir = function() {
		$scope.kilometros = $scope.millas * 1.60934
	}
});
  
  
