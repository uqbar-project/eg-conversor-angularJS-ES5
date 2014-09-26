'use strict';

/* Controllers */
var app = angular.module('conversorApp', [])

var conversorController = function ($scope) {
	/* scope */
	$scope.millas = 0;
	$scope.kilometros = ' <ingrese millas> '
		
	$scope.convertir = function() {
		$scope.kilometros = $scope.millas * 1.60934
	}
}

app.controller('ConversorController', conversorController);
  
  
