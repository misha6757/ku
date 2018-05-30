"use strict";
// process.env.DISABLE_NOTIFIER = true;

var gulp = require('gulp'),
  plumber = require('gulp-plumber'),

// STYLES
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),

// SCRIPTS
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  order = require("gulp-order"),

//HTML 
 // minifyHTML = require('gulp-minify-html'),

// IMAGES
// imagemin     = require( 'gulp-imagemin' ),
// pngquant = require('imagemin-pngquant'),


//LIVERELOADr
  livereload = require('gulp-livereload'),
  notify = require('gulp-notify'),
  connect = require('gulp-connect');

//sass
gulp.task('sass', function () {
  gulp.src('src/scss/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({
      browsers: ['last 7 versions'],
      cascade: false
    }))

    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('dist/css/'))
    .pipe(connect.reload())
    .pipe(notify('Done!'));
});

//js
gulp.task('js', function () {
  gulp.src('src/js/*.js')
    .pipe(plumber())
    .pipe(order([
      "jquery-2.2.0.js",
      "Underscore.js",
      "backbone.js",
      "ui.js",
      "konva.js",
	  "core.js",
	  "kons.js",
	  "navigator.js",
	  "jquery.easydropdown.js",
    ]))
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'))
    .pipe(connect.reload())
    .pipe(notify('Done!'));
});

// html
//gulp.task('html', function () {
//  var opts = {
//    conditionals: true,
//    spare: true
//  };
//  gulp.src('src/*.html')
//    .pipe(plumber())
//    .pipe(minifyHTML(opts))
//    .pipe(gulp.dest('dist/'))
//    .pipe(connect.reload())
//    .pipe(notify('Done!'));
//});

 gulp.task('assets', function () {
  gulp.src('src/img/**')
     .pipe(plumber())
     .pipe(gulp.dest('dist/img/'))
     .pipe(connect.reload())
     .pipe(notify('Images: done'));
   gulp.src('src/scss/fonts/**')
     .pipe(gulp.dest('dist/css/fonts/'))
     .pipe(connect.reload())
     .pipe(notify('Fonts: done'));
 });


//connect
gulp.task('connect', function () {
  connect.server({
    root: 'dist/',
    port: 8000,
    livereload: true
  });
});


//Watch
gulp.task('watch', function () {
  gulp.watch(['src/scss/*.scss'], ['sass']);
  gulp.watch(['src/js/*.js'], ['js']);
  gulp.watch(['src/img/**'], ['assets']);
  gulp.watch(['src/css/fonts/**'], ['assets']);
  //gulp.watch(['src/*.html'], ['html']);
});

gulp.task('compile', ['sass', 'js']);

//Default Task
gulp.task('default', ['connect', 'sass', 'js', 'watch']);