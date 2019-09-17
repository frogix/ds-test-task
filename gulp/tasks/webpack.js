var config, connect, gulp, handler, notify, options, path, server, webpack;

gulp = require('gulp');

path = require('path');

connect = require('gulp-connect');

notify = require('gulp-notify');

webpack = require('webpack');

server = require('./server');

config = require('../config');

options = {
  mode: 'development',
  entry: path.resolve('./src/js/app.js'),
  output: {
    path: path.resolve('./dist/js/'),
    filename: 'bundle.js'
  }
};

handler = function(err, stats) {
  var errors;
  errors = stats.compilation.errors;
  if (err) {
    throw new gutil.PluginError('webpack', err);
  }
  if (errors.length > 0) {
    notify.onError({
      title: 'Webpack Error',
      message: '<%= error.message %>'
    }).call(null, errors[0]);
    gutil.log('[webpack]', stats.toString({
      colors: true,
      chunks: false
    }));
  }
  return gulp.src(config.distDir + 'js').pipe(server.reload());
};

gulp.task('webpack', function() {
  return webpack(options).run(function(err, stats) {
    return handler(err, stats);
  });
});

gulp.task('webpack:watch', function() {
  return webpack(options).watch({
    aggregateTimeout: 100,
    poll: false
  }, handler);
});
