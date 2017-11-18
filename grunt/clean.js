'use strict';
module.exports = function(grunt) {
	grunt.config.set('clean', {
		scripts:  ['dist/*.js',],
		styles:  ['dist/*.css', 'dist/*.css.map',],
        all: ['dist/'],
	});
    grunt.loadNpmTasks('grunt-contrib-clean');
};
