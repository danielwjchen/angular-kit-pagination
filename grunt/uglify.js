'use strict';
module.exports = function(grunt, configs) {
	grunt.config.set('uglify', {
        options : {
            mangle: false, // changes function and variable names
            compress: true,
            preserveComments: false,
            sourceMap: true,
        },
        my_target: {
            files : {
                'dist/ng.kit.pagination.min.js': [
                    'dist/ng.kit.pagination.templates.js',
                    'src/pagination.directive.js',
                ],
            }
        },
	});
    grunt.loadNpmTasks('grunt-contrib-uglify');
};
