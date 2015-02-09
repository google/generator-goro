// Generated on <%= (new Date).toISOString().split('T')[0] %> using
// <%= pkg.name %> <%= pkg.version %>
'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    
    shell: {
        options: {
        stderr: false
      },         
      target: {
        command: '<%= goroPath %> upload --branch=<%= projectBranch %> --dir=<%= projectDomain %><%= projectPath %> --ignore=.goroignore --force .'
      }
    }

  });

  grunt.loadNpmTasks('grunt-shell');
  
  grunt.registerTask('default', ['shell']);
  
};