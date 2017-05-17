/**
 * Created by Think on 2017/4/17.
 */
var http = require('http');
var url = require('url');
function start(route, handle) {
    function onRequest (request, response){
        var path = url.parse(request.url).pathname;
        console.log("~~~~~~~~~~~~~~~~~Request for" + path);

         route(path, handle, response );
    }
    http.createServer(onRequest).listen(8181);
    console.log("Server has started.");
}

exports.start = start;
