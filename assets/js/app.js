angular.module('lab30', ['ngRoute', 'lab30.controllers', 'lab30.services'])
.config(function($routeProvider){

    'use strict';
    $routeProvider
        .when('/', {
            templateUrl: 'js/templates/home.html'
        })
        .when('/data', {
            controller: 'lab30Controller',
            templateUrl: 'js/templates/data.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});