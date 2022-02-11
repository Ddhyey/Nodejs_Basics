var net = require('net');


var server  = net.createServer();
//In tcp we first make connection and then work on that
server.on("connection",(socket)=>{
    console.log("new client connection is made!");
    var remoteAddress = socket.remoteAddress + ":" + socket.remotePort
    socket.on('data',function(d){
        console.log("connection data from %s:%s",remoteAddress);


    });

    socket.once('close',function(){

    });

    socket.on('error',function(){

    });

})
server.listen(9000,()=>{
    console.log('serverlistening at %j',server.address());
});

//other methods are pause() and resume()
