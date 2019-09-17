var gulp;

gulp = require('gulp');

gulp.task('default', gulp.parallel('connect', 'build', 'watch'));
