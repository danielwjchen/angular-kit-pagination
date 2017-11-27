/**
 * Defines <ng-kit-pagination>
 */
(function(angular) {
    'use strict';
    angular.module('ng-kit.pagination')
    .directive('ngKitPagination', function() {
        return {
            restrict: 'E',
            templateUrl: 'pagination.directive.html',
            scope: {
                currentPage: '=number',
                pageSize: '=size',
                itemCount: '=count',
                onPageChange: '=onPageChange',
            },
            controller: function($scope) {
                /**
                 * Gets number of pages
                 */
                $scope.getNumberOfPages = function() {
                    if (!$scope.itemCount) {
                        return null;
                    }
                    return Math.ceil($scope.itemCount / $scope.pageSize); 
                };
                /**
                 * Gets items shown on page
                 */
                $scope.getItemsShown = function() {
                    var itemCount = $scope.currentPage * $scope.pageSize;
                    if (itemCount < $scope.itemCount) {
                        return itemCount;
                    } else {
                        return $scope.itemCount;
                    }
                };
                /**
                 * Goes to previous page
                 */
                $scope.goToPreviousPage = function($event) {
                    $event.stopPropagation();
                    $event.preventDefault();
                    if ($scope.currentPage <= 1) {
                        return;
                    }
                    $scope.currentPage--;
                    if ($scope.onPageChange) {
                        $scope.onPageChange($scope.currentPage);
                    }
                };
                /**
                 * Goes to next page
                 */
                $scope.goToNextPage = function($event) {
                    $event.stopPropagation();
                    $event.preventDefault();
                    if ($scope.currentPage >= $scope.getNumberOfPages()) {
                        return;
                    }
                    $scope.currentPage++;
                    if ($scope.onPageChange) {
                        $scope.onPageChange($scope.currentPage);
                    }
                };

                // makes sure page does not go out of range
                $scope.$watch('currentPage', function(newValue, oldValue) {
                    if (newValue < 1 || newValue > $scope.getNumberOfPages()) {
                        $scope.currentPage = oldValue;
                    }
                    if ($scope.currentPage < 1) {
                        $scope.currentPage = 1;
                    }
                });
            }
        };
    });
})(angular);
