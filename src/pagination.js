/**
 * Defines Pagination module
 */
var angular = require('angular');
var PaginationController = require('./pagination.controller');
var template = require("./pagination.template.pug");
var moduleName = 'ng-kit.pagination';

angular.module(moduleName, [])
.directive('ngKitPagination', function() {
    return {
        restrict: 'E',
        template: template,
        scope: {
            currentPage: '=number',
            pageSize: '=size',
            itemCount: '=count',
            onPageChange: '=onPageChange',
        },
        controller: PaginationController,
    };
});

module.exports = moduleName;