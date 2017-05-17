/**
 * Created by Think on 2017/5/16.
 */
var exec = require("child_process").exec;
function start(response) {
    console.log("Request handler 'start' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Upload");
    response.end();
}

function upload(response) {
    console.log("Request handler 'upload' was called.");
    var s= setTimeout(function () {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("setTimeout function was finished");
        response.end();
    },5000);
}

exports.start = start;
exports.upload = upload;