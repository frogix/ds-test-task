var config, notify, path;

notify = require('gulp-notify');

path = require('path');

config = {
  srcDir: path.resolve('./src/') + '/',
  distDir: path.resolve('./dist/') + '/',
  errorHandler: function() {
    var args;
    args = Array.prototype.slice.call(arguments);
    notify.onError({
      title: '<%= error.name %>',
      message: '<%= error.message %> (<%= error.filename %>)'
    }).apply(this, args);
    return this.emit('end');
  }
};

module.exports = config;
