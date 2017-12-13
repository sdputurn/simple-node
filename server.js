var http = require('http');

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  var os = require('os');
  response.end('Hello World new! ' + os.hostname());
};
var www = http.createServer(handleRequest);
www.listen(8080);
