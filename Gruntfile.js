module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);//加载所有任务
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // uglify: {
    //   options:{
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */'
    //   },
    //   my_target:{
    //     files:{
    //       'dest/output1.min.js':['src/**/app.js'],
    //       'dest/output2.min.js':['src/**/main.js']
    //     }
    //   }
    // },
    // qunit: {
    //   files: ['src/**/*.html']
    // },
    // jshint: {
    //   files: ['Gruntfile.js', 'src/**/*.js', 'dest/**/*.js', 'build/**/*.js'],
    //   options: {
    //     globals: {
    //       jQuery: true,
    //       console: true,
    //       module: true,
    //       document: true
    //     }
    //   }
    // },
    // // less:{
      
    // // },
    // watch:{
    //   files: ['<%= jshint.files %>'],
    //   tasks: ['jshint','qunit']
    // }

    connect:{
      options:{
        port:9001,
        protocol:'http',
        hostname:'localhost',//
        livereload:35729 //声明给watch端口
      },
      server:{
        options:{
          open:true,//自动打开网页
          base:[
            'src'  //主目录
          ]
        }
      }
    },

    watch:{
      livereload:{
        options:{
          livereload:'<%=connect.options.livereload%>' //监听前面声明的端口
        },
        files:[//下面文件改变就会实时刷新
          'src/*.html',
          'src/assets/css/*.css',
          'src/assets/img/*.{png,jpg}',
          'src/assets/js/*.js',
          'src/assets/less/*.less'
        ]
      }
    }

  });

  // 加载包含 "uglify" 任务的插件。
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-less');
  // grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');


  // 开发执行
  // grunt.registerTask('test', ['jshint','qunit']);

  // 默认被执行的任务列表。
  // grunt.registerTask('default', ['jshint','qunit','uglify']);

  // 监听
  grunt.registerTask('default', ['connect:server','watch']);
  // grunt.registerTask('serve', ['connect:server']);

};
