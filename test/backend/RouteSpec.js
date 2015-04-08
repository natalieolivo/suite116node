var express = require('express')
  , request = require('supertest')('http://localhost:8888');

var app = express();

describe('Routes', function() {	

	it('Returns Home Page', function(done){	
		request
		.get('/')		
		.expect(200)
		.end(function(err, response) {
			if (err) return done(err);
			done();
		});
	});	

	it('Returns Rates', function(done){
		request
			.get('/rates')
			.expect(200)
			.end(function(err, response) {
				if (err) return done(err);
				done();
			});
	});		

	it('Returns Floor Plan', function(done){
		request
			.get('/floorplan')
			.expect(200)
			.end(function(err, response) {
				if (err) return done(err);
				done();
			});
	});

	it('Returns Email Us', function(done){
		request
			.get('/emailus')
			.expect(200)
			.end(function(err, response) {
				if (err) return done(err);
				done();
			});
	});

	it('Returns Map', function(done){
		request
			.get('/map')
			.expect(200)
			.end(function(err, response) {
				if (err) return done(err);
				done();
			});
	});	

	it('Returns Faqs', function(done){
		request
			.get('/faqs')
			.expect(200)
			.end(function(err, response) {
				if (err) return done(err);
				done();
			});
	});

	it('Returns Kids', function(done){
		request
			.get('/kids')
			.expect(200)
			.end(function(err, response) {
				if (err) return done(err);
				done();
			});
	});

	it('Returns Dance', function(done){
		request
			.get('/dance')
			.expect(200)
			.end(function(err, response) {
				if (err) return done(err);
				done();
			});
	});	

	it('Returns Wedding', function(done){
		request
			.get('/wedding')
			.expect(200)
			.end(function(err, response) {
				if (err) return done(err);
				done();
			});
	});	
});