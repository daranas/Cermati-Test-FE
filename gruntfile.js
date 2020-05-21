module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    useminPrepare: {
      html: [
        'index.html',
        'success/index.html'
      ],
      options: {
        dest: 'production'
      }
    },
    usemin: {
      html: [
        'production/index.html',
        'production/success/index.html'
      ]
    },
    copy: {
      generated: {
        files: [
          {
            expand: true,
            src: '*.html',
            dest: 'production'
          },
          {
            expand: true,
            cwd: 'assets/images',
            dest: 'production/assets/images',
            src: '**/*'
          },
          {
            expand: true,
            cwd: 'node_modules/@fortawesome/fontawesome-free/webfonts',
            dest: 'production/assets/webfonts',
            src: '**/*'
          }
        ]
      }
    },
    clean: {
      generated: {
        files: [
          {
            dot: true,
            src: ['.tmp']
          }
        ]
      }
    }

  });

  grunt.registerTask('default', [
    'copy',
    'useminPrepare',
    'concat',
    'uglify',
    'cssmin',
    'usemin',
    'clean'
  ]);

}