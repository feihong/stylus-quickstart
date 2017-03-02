const gulp = require('gulp')
const stylus = require('gulp-stylus')

const stylusGlob = './src/**/[^_]*.styl'

gulp.task('build', () => {
  gulp.src(stylusGlob)
    .pipe(stylus())
    .pipe(gulp.dest('./static/css'))
})

gulp.task('watch', () => {
  gulp.watch(stylusGlob, ['build'])
})

gulp.task('default', ['build'])
