'use strict';
(function(angular) {
    angular.module('ng.kit.pagination.example', [
        'ng.kit.pagination',
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