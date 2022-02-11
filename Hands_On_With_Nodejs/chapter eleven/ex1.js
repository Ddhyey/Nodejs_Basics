/*Make a chat server that requires no authentication, 
just a TCP client connection. Each time the
client sends some text, the server broadcasts 
it to the other clients.*/
var sockets = [];

require('net').createServer(function(socket) {
    sockets.push(socket);
    socket.on('data', function(data) {
        console.log('data :>> ', data.toString('utf8'));
        sockets.forEach(function(socket) {
            socket.write(data); 
        });
    });
    socket.on('end', function() {
        var pos = sockets.indexOf(socket);
        if (pos > 0) {
            sockets.splice(pos, 1);
        }
    });
}).listen(4001);