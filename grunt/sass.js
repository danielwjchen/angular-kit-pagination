'use strict';
module.exports = function(grunt) {
	grunt.config.set('sass', {
        compile: {
            options: {
                style: 'compressed',
                loadPath: [
                    'node_modules',
                    'src',
                ],
            },
            files: {
                'dist/ng-kit.pagination.css': 'src/pagination.directive.scss',
            },
        },
	});
    grunt.loadNpmTasks('grunt-contrib-sass');
};
