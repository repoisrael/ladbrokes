var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var minifyCSS = require('gulp-clean-css');



var config = {
    assetsPath: './assets/styles/',
    viewsPath: './',
    compiledPath: './assets/styles/',
};

gulp.task('watch', function() {
  gulp.start('sass');

  watch(config.viewsPath + '*.html', function() {
    browserSync.reload();
  });

  watch(config.assetsPath + 'scss/**/*.scss',function(){
    gulp.start('sass');
  });

});

gulp.task('sass', function () {
  return gulp.src(config.assetsPath + 'scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write())
    //.pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(config.compiledPath + 'css'))
    .pipe(browserSync.stream());
});


