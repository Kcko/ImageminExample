module.exports = function (grunt) {

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);


  grunt.initConfig({
  
    pkg: grunt.file.readJSON('package.json'),

    imagemin: {                          // Task

      projekt1: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'projekt1/',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'projekt1/dist/'                  // Destination path prefix
        }]
      },

      projekt2: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'projekt2/',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'projekt2/dist/'                  // Destination path prefix
        }]
      }   
    }



  });


  grunt.registerTask('projekt1', ['imagemin:projekt1']);
  grunt.registerTask('projekt2', ['imagemin:projekt2']);
  grunt.registerTask('all', ['imagemin']);

};
