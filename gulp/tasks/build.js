var gulp;

gulp = require('gulp');


require('./webpack');

require('./sass');

require('./nunjucks');

require('./watch');

gulp.task('build', gulp.parallel('webpack', 'sass', 'nunjucks'));
