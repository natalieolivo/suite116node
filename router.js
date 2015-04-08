var path = require('path');

// Export routes
module.exports = function(app) {

    /** HOME **/
	app.get('/', function(request, response) {		
		response.render('index', {
			touts: [{
				title:"Wedding Packages",
				link:"wedding",
				image:"wedding1.jpg",
				copy:"Our Wedding Planning Partners are best in industry experts. There is so much to remember for such a big day! Book an expert today, and relieve some of the stresses of arranging your big day."
			}]
		});
	});

	/** RATES **/
	app.get('/rates', function(request, response) {
		response.sendFile('rates.html', { root: path.join(__dirname, './views') }, function(err) {
			if(err) {
				response.status(err.status).end();	
			} else {
				 console.log('Sent:', path.join(__dirname, './views'));
			}			
		});
	});

	/** FlOORPLAN **/
	app.get('/floorplan', function(request, response) {
		response.sendFile('floorplan.html', { root: path.join(__dirname, './views') }, function(err) {
			if(err) {
				response.status(err.status).end();	
			} else {
				 console.log('Sent:', path.join(__dirname, './views'));
			}
		});
	});

	/** EMAIL US **/
	app.get('/emailus', function(request, response) {
		response.sendFile('emailus.html', { root: path.join(__dirname, './views') }, function(err) {
			if(err) {
				response.status(err.status).end();	
			} else {
				 console.log('Sent:', path.join(__dirname, './views'));
			}
		});
	});

	/** MAP **/
	app.get('/map', function(request, response) {
		response.sendFile('map', { root: path.join(__dirname, './views') }, function(err) {
			if(err) {
				response.status(err.status).end();	
			} else {
				 console.log('Sent:', path.join(__dirname, './views'));
			}
		});
	});

	/** FAQs **/
	app.get('/faqs', function(request, response) {
		response.sendFile('faqs.html', { root: path.join(__dirname, './views') }, function(err) {
			if(err) {
				response.status(err.status).end();	
			} else {
				 console.log('Sent:', path.join(__dirname, './views'));
			}
		});
	});

	/** KIDS **/
	app.get('/kids', function(request, response) {
		response.sendFile('kids.html', { root: path.join(__dirname, './views') }, function(err) {
			if(err) {
				response.status(err.status).end();	
			} else {
				 console.log('Sent:', path.join(__dirname, './views'));
			}
		});
	});

	/** DANCE **/
	app.get('/dance', function(request, response) {
		response.sendFile('dance.html', { root: path.join(__dirname, './views') }, function(err) {
			if(err) {
				response.status(err.status).end();	
			} else {
				 console.log('Sent:', path.join(__dirname, './views'));
			}
		});
	});

	/** WEDDING **/
	app.get('/wedding', function(request, response) {
		response.sendFile('wedding.html', { root: path.join(__dirname, './views') }, function(err) {
			if(err) {
				response.status(err.status).end();	
			} else {
				 console.log('Sent:', path.join(__dirname, './views'));
			}
		});
	});

};