module.exports = function (grunt) {
    'use strict';
    grunt.config.merge({});
    grunt.registerTask('default', [
        'build',
        'concurrent:watch'
    ]);
};