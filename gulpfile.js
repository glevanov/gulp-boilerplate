const gulp = require('gulp')
const sass = require('gulp-sass')
const plumber = require('gulp-plumber')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const csso = require('gulp-csso')
const server = require('browser-sync').create()

gulp.task('css', function () {
  return gulp.src('src/sass/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(gulp.dest('src/'))
    .pipe(server.stream())
})

gulp.task('server', function () {
  server.init({
    server: 'src/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  })

  gulp.watch('src/sass/**/*.scss', gulp.series('css'))
  gulp.watch('src/*.html').on('change', server.reload)
})

gulp.task('start', gulp.series('css', 'server'))
