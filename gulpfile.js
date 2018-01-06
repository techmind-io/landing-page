const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./src/front/style/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/front/style'));
});

gulp.task('sass:watch', ['sass'], function () {
  gulp.watch('./src/front/style/*.scss', ['sass']);
});


gulp.task('build-templates', ['sass'], function () {
  gulp.src('./src/templates/**/*')
  .pipe(gulp.dest('./dist/templates/'));
});
