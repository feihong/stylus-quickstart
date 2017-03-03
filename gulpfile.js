const gulp = require('gulp')
const stylus = require('gulp-stylus')

const stylusGlob = './src/**/[^_]*.styl'

gulp.task('build', () => {
  gulp.src(stylusGlob)
    // Set src as a directory where any .styl files can import from.
    .pipe(stylus({include: './src'}))
    .pipe(gulp.dest('./static/css'))
})

gulp.task('watch', () => {
  gulp.watch(stylusGlob, ['build'])
})

gulp.task('default', ['build'])
