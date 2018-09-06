/**
 * Defines ng-kit.pagination GruntJS tasks.
 */
'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    });
    require('./grunt/clean')(grunt);
    require('./grunt/express-server')(grunt);
    require('./grunt/sass')(grunt);
    require('./grunt/jshint')(grunt);
    require('./grunt/watch')(grunt);
    require('./grunt/webpack')(grunt);

    var taskDefinition = {
        'compile': [
            'clean:all', 
            'jshint', 
            'sass', 
            'webpack:compile'
        ],
        'develop': [
            'clean:all', 
            'jshint', 
            'sass', 
            'webpack:develop',
            'express',
            'watch',
        ],
        'default': ['compile',]
    };
    Object.keys(taskDefinition).forEach(function(taskName) {
        grunt.registerTask(taskName, taskDefinition[taskName])
    });
};