let config, gulp, nunjucksRender, server;

gulp = require('gulp');

nunjucksRender = require('gulp-nunjucks-render');

server = require('./server');

config = require('../config');

gulp.task('nunjucks', function() {
	return gulp.src(config.srcDir + 'pages/*.njk')
		.pipe(nunjucksRender({
			path: [config.srcDir + "templates"]
		}))
		.on('error', config.errorHandler)
		.pipe(gulp.dest(config.distDir))
		.pipe(server.reload());
});

gulp.task('nunjucks:watch', function() {
	return gulp.watch(config.srcDir + '**/*.(html|njk)', gulp.series('nunjucks'));
});
