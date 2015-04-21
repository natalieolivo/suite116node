var gulp = require('gulp')
	, karma = require('karma').server
	, mocha = require('gulp-mocha')
	, sass = require('gulp-ruby-sass')
	, nodemon = require('gulp-nodemon');


gulp.task('start', function() {
	nodemon({
		script: 'index.js'
	,	ext: 'js hbs scss'
	// , env: { 'NODE_ENV': 'development' }
	});
});

gulp.task('FETests', function () {
  
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: false
  });

});

gulp.task('BETests', function () {
	return gulp.src('test/backend/RouteSpec.js', {read: false})
        .pipe(mocha({reporter: 'spec'}));
});

gulp.task('sass', function () { 
    return sass('assets/styles/scss')
    .pipe(gulp.dest('assets/styles'));
});

gulp.task('default', ['start', 'sass']);