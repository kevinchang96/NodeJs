var express = require('express');
var app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Responds with "Hello, world" on the homepage
app.get('/',function( req, res ){
	res.send('Hello, world!');
});


var server = app.listen( 8080, function(){
	var host = server.address().address;
    var port = server.address().port;
	console.log( "Server listening on http://%s:%s", host, port );
});


                         
