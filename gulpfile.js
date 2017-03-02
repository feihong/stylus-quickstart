const gulp = require('gulp')
const stylus = require('gulp-stylus')


gulp.task('build', () => {
  gulp.src('./src/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./css'))
})

gulp.task('watch', () => {
  gulp.watch('./src/*.styl', ['build'])
})

gulp.task('default', ['build'])
