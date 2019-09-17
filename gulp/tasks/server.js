var config, connect, gulp;

gulp = require('gulp');

connect = require('gulp-connect');

cors = require('cors');

config = require('../config');

gulp.task('connect', function() {
  return connect.server({
    port: 1337,
    root: config.distDir,
    livereload: true,
    middleware: function() {
        return [cors()];
    }
  });
});

module.exports = connect;
