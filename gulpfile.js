var gulp = require('gulp')
	, karma = require('karma').server
	, mocha = require('gulp-mocha')
	, sass = require('gulp-ruby-sass')
	, nodemon = require('gulp-nodemon')
	, hbscompile = require('gulp-compile-handlebars')
	, Handlebars = require('handlebars')
	, rename = require('gulp-rename')
	, fs = require('fs')
	, _ = require('underscore');


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

gulp.task('templates-compile', function() {
	
    _.each(['home', 'rates'], function(page) {
			
		var mainTemplateContext = {
			content: page,
			specialRateText : "(5) hour special"
		};		

    	gulp.src('src/page/main.hbs')
			.pipe(hbscompile(mainTemplateContext, {
					ignorePartials: true,
					partials : {},
					batch : ['./src/pages/shared'],
					helpers : {
						/* 
						* (Pages Helper)
						* 
						* Main.hbs will compile first, resolving parent context and templateStringName
						* A lookup is made from templateStringName based on directory, and the result is registered 
						* as a partial, compiled with its relevant data and rendered.
						*/
						pages : function(templateStringName, mainTemplateContext, opts) {
							var fileContents, template, results;

							fileContents = fs.readFileSync('./src/pages/'+templateStringName+'/main.hbs', 'utf8');
							Handlebars.registerPartial(templateStringName, fileContents);
							templateFn = Handlebars.compile(fileContents);							

							//render step
							result = templateFn(mainTemplateContext.data);							

							return Handlebars.partials[templateStringName];
						}
					}
			}))
			.pipe(rename(page+'.html'))
			.pipe(gulp.dest('build/pages'));
    });
    

});

gulp.task('default', ['sass', 'templates-compile']);