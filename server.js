var http = require('http');

var handleRequest = function(request, response) {
  console.log(new Date().toISOString()+ ' :: Received request for URL: ' +  request.url);
  response.writeHead(200);
  var os = require('os');
  response.end(new Date().toISOString() +':: Hello World new! from host - ' + os.hostname());
};
var www = http.createServer(handleRequest);
www.listen(8080);
