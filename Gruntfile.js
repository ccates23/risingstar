module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);



  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    bower_concat: {
      main: {
        dest: 'www/lib/build.js',
        cssDest: 'www/lib/build.css'
      }
    },
    clean: ['www/lib'],

    // copy: {
    //   main: {
    //     files: [
    //       {
    //         expand: true,
    //         cwd: 'src/',
    //         src: [
    //           '**',
    //           '!**/*.jade',
    //           '!**/*.scss',
    //           '!**/*.js'
    //         ],
    //         dest: 'public/',
    //         filter: 'isFile'
    //       }
    //     ]
    //   }
    // },
    // cssmin: {
    //   main: {
    //     files: {
    //       'public/lib/build.css': 'public/lib/build.css'
    //     }
    //   }
    // },


    uglify: {
      bower: {
        files: {
          'www/lib/build.js': 'www/lib/build.js'
        }
      }
      // main: {
      //   files: [
      //     {
      //       expand: true,
      //       cwd: 'public/',
      //       src: ['**/*.js'],
      //       dest: 'public/'
      //     }
      //   ]
      // }
    }
  });

  grunt.registerTask('default', []);
  grunt.registerTask('build', [
    'clean',
    'bower_concat',
    'uglify'
  ]);
  grunt.registerTask('build-dev', [
    'clean',
    'copy',
    'babel:dev',
    'bower_concat',
    'jade:dev',
    'sass:dev',
    'autoprefixer'
  ]);

  grunt.registerTask('serve', [
    'build-dev',
    'connect',
    'watch'
  ]);

};