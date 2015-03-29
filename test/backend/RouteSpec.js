var express = require('express')
  , request = require('supertest');

var app = express();



describe('Routes', function() {	

	it('Returns Home Page', function(done){	
		request(app)
		.get('/')		
		.expect(200);
		// why you no work??????? WHYYYYYY?!!!!!!
	});	

	it('Returns Rates', function(done){
		request(app)
		.get('/rates')
		.expect(200)
		.end(function(err, response) {
			if (err) return done(err);
        	done();
		});
	});		

	it('Returns Floor Plan', function(){
		app.get('/floorplan', function(request, response) {
			response.should.have.length(1);			
		});
	});

	it('Returns Email Us', function(){
		app.get('/emailus', function(request, response) {
			response.should.have.length(1);			
		});
	});

	it('Returns Map', function(){
		app.get('/map', function(request, response) {
			response.should.have.length(1);			
		});
	});	

	it('Returns Faqs', function(){
		app.get('/faqs', function(request, response) {
			response.should.have.length(1);			
		});
	});

	it('Returns Kids', function(){
		app.get('/kids', function(request, response) {
			response.should.have.length(1);			
		});
	});

	it('Returns Dance', function(){
		app.get('/dance', function(request, response) {
			response.should.have.length(1);			
		});
	});	

	it('Returns Wedding', function(){
		app.get('/wedding', function(request, response) {
			response.should.have.length(1);			
		});
	});	
});