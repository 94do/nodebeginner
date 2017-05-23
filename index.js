/**
 * Created by Think on 2017/4/17.
 */
var server = require('./server');
var router =  require('./router');
var requestHandlers = require('./requestHandlers');

var routeUrl = {};
routeUrl['/'] = requestHandlers.start;
routeUrl['/start'] = requestHandlers.start;
routeUrl['/upload'] = requestHandlers.upload;
routeUrl['/show'] = requestHandlers.show;
console.log("index.js");
server.begin(router.route, routeUrl);