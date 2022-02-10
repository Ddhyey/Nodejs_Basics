//Creating a new http server
// var http = require('http');
// var server = http.createServer();
// server.on('request',function(req,res){
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.write('Hello World\n');
//     res.write('This is amazing!');
//     res.end();
// });
// server.listen(4000);



// http.ServerRequest object
//req.url, req.method, req.headers
// require('http').createServer(function(req,res){
//     res.writeHead(200, {'Content-type':'text/plain'});
//     res.end(req.url);
// }).listen(4000)
// var util = require('util');

// require('http').createServer(function (req, res) {
//     res.writeHead(200, {
//         'Content-Type': 'text/plain'
//     });
//     res.end(util.inspect(req.headers));
// }).listen(4000);




//http.ServerResponse object
// var util = require('util');

// require('http').createServer(function (req, res) {
//     res.writeHead(200, {
//         'Content-Type': 'text/plain',
//         'Cache-Control': 'max-age=3600',

//     });
//     res.end('Hello World!');
//     res.write('Hello');
    
//     var buf = new Buffer('Hello World');
//     buf[0] = 45;
//     res.write(buffer);
// }).listen(4000);
require('http').createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(req.url);
    }).listen(4000);

//res.setHeader(name,value);
//res.removeheader(name,value);

