'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('autoprefixer'),
    webserver = require('gulp-webserver'),
    livereload = require('gulp-livereload');



gulp.task('sass', function(){
  return gulp.src('styles/**/*.scss')
    .pipe( sass({outputStyle: 'compact'}).on('error', sass.logError) )
    .pipe( gulp.dest('./styles') )
    .pipe( livereload() );
});


gulp.task('html', function(){
  return gulp.src('*.html')
    .pipe( livereload() );
});


gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('styles/**/*.*', ['sass']);
  gulp.watch('*.html', ['html']);
});

gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
      //host: '0.0.0.0',
      open: true
    }));
});



gulp.task('default', ['sass', 'watch', 'webserver']);