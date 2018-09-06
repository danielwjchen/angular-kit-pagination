'use strict';
module.exports = function(grunt) {
	grunt.config.set('express', {
        options: {
            port: 3000,
            debug: true,
        },
        develop: {
            options: {
                server: 'example',
            }
        }
	});
    grunt.loadNpmTasks('grunt-express');
};