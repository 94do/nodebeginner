/**
 * Created by Think on 2017/4/17.
 */
var http = require('http');

http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8181);

console.log("Server has started.");