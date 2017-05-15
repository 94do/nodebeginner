/**
 * Created by Think on 2017/4/17.
 */
var http = require('http');
function start() {
    function onRequest (request, response){
        console.log("Request received.");
        response.writeHead(200, {"Content-Type":"text/plain"});
        response.write("Hello World my node.js study");
        response.end();
    }
    http.createServer(onRequest).listen(8181);
    console.log("Server has started.");
}

exports.start = start;
