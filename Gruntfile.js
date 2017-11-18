/**
 * Defines HangarA.com GruntJS tasks.
 */
'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    });
    require('./grunt/clean')(grunt);
    require('./grunt/sass')(grunt);
    require('./grunt/jshint')(grunt);
    require('./grunt/uglify')(grunt);
    require('./grunt/watch')(grunt);
    require('./grunt/compile-angular-templates')(grunt);

    var taskDefinition = {
        'compile': [
            'clean:all', 
            'compile-angular-templates', 
            'sass', 
            'jshint', 'uglify',
        ],
        'compile-scripts': [
            'clean:scripts',
            'compile-angular-templates', 
            'jshint', 
            'uglify',
        ],
        'compile-styles': [
            'clean:styles',
            'sass', 
        ],
        'default': ['compile', 'watch']
    };
    Object.keys(taskDefinition).forEach(function(taskName) {
        grunt.registerTask(taskName, taskDefinition[taskName])
    });
};
