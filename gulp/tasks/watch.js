var gulp;

gulp = require('gulp');

gulp.task('watch', gulp.parallel('nunjucks:watch', 'webpack:watch', 'sass:watch'));
