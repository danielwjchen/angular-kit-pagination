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
    require('./grunt/uglify')(grunt);
    require('./grunt/watch')(grunt);
    require('./grunt/webpack')(grunt);
    require('./grunt/compile-angular-templates')(grunt);

    var taskDefinition = {
        'compile': [
            'clean:all', 
            'compile-angular-templates', 
            'jshint', 
            'sass', 
            'uglify',
            'webpack:compile'
        ],
        'develop': [
            'clean:all', 
            'compile-angular-templates',
            'jshint', 
            'sass', 
            'uglify',
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