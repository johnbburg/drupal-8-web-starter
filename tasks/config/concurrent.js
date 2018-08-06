module.exports = function (grunt) {
    'use strict';
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.config.merge({
        concurrent: {
            watch: {
                'tasks': ['shell:gessoWatch'],
                'options': { 'logConcurrentOutput': true }
            }
        }
    });
};