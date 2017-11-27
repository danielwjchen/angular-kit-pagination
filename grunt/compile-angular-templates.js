/**
 * Registers task to compile angularJS templates
 */
'use strict';
var nodels = require('node-ls');
var angularTemplateCompiler = require('angular-template-compiler');

module.exports = function(grunt) {
    var angularJSModuleName = 'ng-kit.pagination.templates';
    var configs = {};
    var srcFolderPath = 'src/';
    var distFilePath = 'dist/' + angularJSModuleName + '.js';
    grunt.registerTask(
        'compile-angular-templates', 
        'A task to compile angularJS templates',
        function() {
            angularTemplateCompiler.compile(angularJSModuleName, 
                                            configs, 
                                            srcFolderPath, 
                                            distFilePath);
        }
    );
};
