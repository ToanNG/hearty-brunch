module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-groundskeeper');

  grunt.initConfig({
    exec: {
      demo: {
        command: 'node stream.js'
      }
    },
    groundskeeper: {
      compile: {
        files: {
          'public/javascripts/app.js': 'public/javascripts/app.js'
        },
        options: {
          console: false,
          replace: '"0"'
        }
      }
    }
  });

  grunt.registerTask('deploy-demo', [
    'groundskeeper',
    'exec:demo'
  ]);

};
