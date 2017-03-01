'use strict';

module.exports = function (grunt) {
  require('time-grunt')(grunt);
  require('jit-grunt')(grunt);

  grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  


watch: {
  copy: {
    files: [ 'app/**', '!app/**/*.css', '!app/**/*.js'],
    tasks: [ 'build' ]
  },
  
  scripts: {
    files: ['app/scripts/app.js'],
    tasks:[ 'build']
  },
  
  styles: {
    files: ['app/styles/mystyles.css'],
    tasks:['build']
  },
  
  livereload: {
    options: {
      livereload: '<%= connect.options.livereload %>'
    },
    
    files: [
      'app/{,*/}*.html',
      '.tmp/styles/{,*/}*.css',
      'app/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
    ]
  }
},

connect: {
   options: {
    port: 9000,
    // Change this to '0.0.0.0' to access the server from outside.
    hostname: 'localhost',
    livereload: 35729
  },
  
  dist: {
    options: {
      open: true,
      base:{
        path: 'app',
        options: {
          index: 'index.html',
          maxAge: 300000
        }
      }
    }
  }
},

  });
  
  
 grunt.registerTask('serve',['connect:dist','watch']); 
 

};