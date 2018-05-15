module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        sourceMap:false,
        stripBanners: true,
        //压缩后的文件注释信息
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        footer: '\n/*!修改于<%= grunt.template.today("yyyy-mm-dd") %>  */'  
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }

    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch:{
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }

  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // 开发执行
  grunt.registerTask('test', ['jshint']);

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify']);

};
