const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('sass', () => {
  gulp.src('./src/client/sass/style.scss')
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./distr/client/public'))
});

gulp.task('img', () => {
  gulp.src('./src/client/img/**')
    .pipe(imagemin())
    .pipe(gulp.dest('./distr/client/public/img'));
});

gulp.task('js', () => {
  gulp.src(['./src/client/vendor/midnight.jquery.min.js', './src/client/vendor/anime.min.js', './src/client/js/**'])
    .pipe(concat('main.js', {newLine: ';'}))
    .pipe(uglify())
    .pipe(gulp.dest('./distr/client/public'));
});

gulp.task('build', ['sass', 'img', 'js']);
