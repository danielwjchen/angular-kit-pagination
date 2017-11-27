'use strict';
module.exports = function(grunt) {
	grunt.config.set('sass', {
        compile: {
            files: {
                'dist/ng-kit.pagination.css': 'src/pagination.directive.scss',
            },
        },
        minify: {
            options: {
                style: 'compressed',
            },
            files: {
                'dist/ng-kit.pagination.min.css': 'src/pagination.directive.scss',
            },
        },
	});
    grunt.loadNpmTasks('grunt-contrib-sass');
};
