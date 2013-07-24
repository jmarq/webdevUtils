module.exports=function(grunt){

  grunt.initConfig(
    {
      watch:{
        options:{
          livereload:true
          //this makes it so any file that is watched will trigger
          //  a livereload when it changes
        },
        reloadThese:{
          files:["./*.html","./*.css"]
        }


      }

    }

  );

  grunt.loadNpmTasks("grunt-contrib-watch");
}

