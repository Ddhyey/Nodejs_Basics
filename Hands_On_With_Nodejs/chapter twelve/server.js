var net = require('net');
var server = net.createServer(function(socket) {
    // got a client connection here...
    console.log("Got a connection");
    });
server.listen(4000);