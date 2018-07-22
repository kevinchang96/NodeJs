var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (request, response) {
	// Parse the request containing the file name
    var pathname = url.parse(request.url).pathname;

    // Print the name of the file for which the request was made
    console.log("Request for " + pathname + " received.");

    var extension = pathname.split('.').pop();
    // Read the requested file content from the file system
    fs.readFile(pathname.substr(1), function (err, data) {
	    if (err) {
			console.log(err);
            // HTTP Status: 404 Not Found
            // Content Type: text/plain
			response.writeHead(404, {'Content-Type':'text/html'});
        } else if ( extension == 'jpg' || extension == 'png' ) {
			response.writeHead(200, {'Content-Type': 'image/*'});
    		response.write(data);
        } else {
			response.writeHead(200, {'Content-Type': 'text/html'});
    		response.write(data.toString()); 
		}
        response.end();
    });
}).listen(8080);
