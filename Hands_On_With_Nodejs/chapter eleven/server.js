require('net').createServer(function(socket) {
    // new connection
    socket.on('data', function(data) {
        // got data
        console.log("data = "+data.toString());
    });
    socket.on('end', function(data) {
        // connection closed
        console.log("Connection closed");
    });
    socket.write('Some string');
    
    var port = 5000;
    var host = '127.0.0.1';
    var server = require('http').createServer();
    server.listen(port, host, function() {
        console.log('server listening on port ' + port);
    });

    socket.setTimeout(60000, function() {
        socket.end('idle timeout, disconnecting, bye!');
    });

    // server.close();
    // server.on('close', function() {
    //     console.log('server closed!');
    // })
}).listen(5001);