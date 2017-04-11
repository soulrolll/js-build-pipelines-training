const gulp = require('gulp');
const sass = require('gulp-sass');

/* Defines the folder paths */
const PATHS = {
  'src': {
    'root': './src/**',
    'scss': './src/scss/**/*.scss',
    'js': './src/js/**/*.js'
  },
  'dist': {
    'root': './dist/',
    'css': './dist/css/',
    'js': './dist/js/'
  }
}

/* Exclude them by defining paths */
gulp.task('copy-files', () => {
  return gulp.src([PATHS.src.root, '!' + PATHS.src.scss, '!' + PATHS.src.js])
    .pipe(gulp.dest(PATHS.dist.root));
});

/* Gulp Sass Task */
gulp.task('scss', () => {
  return gulp.src(PATHS.src.scss)
    .pipe(sass()
      .on('error', sass.logError)
    )
    .pipe(gulp.dest(PATHS.dist.css));
});

/* This calls the function tasks */
gulp.task('build' , ['copy-files', 'scss']);

gulp.task('watch', () => {
  gulp.watch(PATHS.src.root, ['build']);
});

gulp.task('default', ['build','watch']);
