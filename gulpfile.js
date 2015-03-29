var gulp = require('gulp');
var karma = require('karma').server;
var mocha = require('gulp-mocha');

/**
 * Run test once and exit
 */
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
