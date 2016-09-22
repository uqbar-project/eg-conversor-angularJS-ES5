(function() {
    'use strict';

    var app = angular.module('conversorApp', []);

    /* Controllers */
    app.controller('conversorCtrl', function() {
        return new Conversor();
    });

}());
