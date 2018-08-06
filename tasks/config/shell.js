module.exports = function (grunt) {
    'use strict';
    grunt.loadNpmTasks('grunt-shell');
    grunt.config.merge({
        shell: {
            gessoWatch: {
                command: 'grunt gessoWatch',
                options: { execOptions: { cwd: '<%= pkg.themePath %>' } }
            },
            gessoBuild: {
                command: 'grunt gessoBuild',
                options: { execOptions: { cwd: '<%= pkg.themePath %>' } }
            }
        }
    });
};