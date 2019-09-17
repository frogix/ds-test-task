var config, gulp, sass, server;

gulp = require('gulp');

sass = require('gulp-sass');

server = require('./server');

config = require('../config');

gulp.task('sass', function() {
  return gulp
	.src(config.srcDir + 'sass/*.sass')
	.pipe(sass())
	.on('error', config.errorHandler)
	.pipe(gulp.dest(config.distDir + 'css'))
	.pipe(server.reload());
});

gulp.task('sass:watch', function() {
  return gulp.watch(config.srcDir + 'sass/*.sass', gulp.series('sass'));
});
