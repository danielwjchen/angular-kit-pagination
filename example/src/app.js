'use strict';
var angular = require('angular');
var ngKitPagination = require('../../index.js');

(function(angular) {
    angular.module('ng-kit.pagination.example', [
        ngKitPagination,
    ])
    .controller('IndexController', function($scope) {
        $scope.pagination = {
            number: 1,
            size: 10,
            count: 50,
            onPageChange: function(pageNumber) {
                console.log('Page changed to ' + pageNumber);
            },
        };
    });
})(angular);