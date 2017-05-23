/**
 * Created by Think on 2017/4/17.
 */
var http = require('http');
var url = require('url');
function begin(route, routeUrl) {
    function onRequest(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        request.setEncoding("utf8");

        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("Received POST data chunk '"+
                postDataChunk + "'.");
        });

        request.addListener("end", function() {
            route(routeUrl, pathname, response, postData);
        });

    }
    http.createServer(onRequest).listen(8181);
    console.log("Server has started.");
}

exports.begin = begin;
