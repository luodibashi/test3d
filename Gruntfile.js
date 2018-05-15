module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options:{
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      my_target:{
        files:{
          'dest/output1.min.js':['src/**/app.js'],
          'dest/output2.min.js':['src/**/main.js']
        }
      }
    },
    qunit: {
      files: ['src/**/*.html']
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'dest/**/*.js', 'build/**/*.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    // less:{
      
    // },
    watch:{
      files: ['<%= jshint.files %>'],
      tasks: ['jshint','qunit']
    }

  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // 开发执行
  grunt.registerTask('test', ['jshint','qunit']);

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['jshint','qunit','uglify']);

};
