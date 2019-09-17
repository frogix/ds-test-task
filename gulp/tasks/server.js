var config, connect, gulp;

gulp = require('gulp');

connect = require('gulp-connect');

config = require('../config');

gulp.task('connect', function() {
  return connect.server({
    port: 1337,
    root: config.distDir,
    livereload: true
  });
});

module.exports = connect;
