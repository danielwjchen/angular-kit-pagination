
'use strict';
module.exports = function(grunt) {
	grunt.config.set('webpack', {
        'compile': require('../webpack.compile.config'),
        'develop': require('../webpack.develop.config'),
	});
    grunt.loadNpmTasks('grunt-webpack');
};