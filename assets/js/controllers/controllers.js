/**
 * Created by alejo8591 on 21/04/15.
 */
angular.module('lab30.controllers', ['lab30.services'])
.controller('lab30Controller', function($scope, data){
    'use strict';
    data.query(function(data){
       $scope.data = data;
    });
});