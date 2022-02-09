//Whenever there is request put on the server(localhost), a message is displayed 
//in the console: "A request has been done on the server."
var http = require('http');
var events = require('events').EventEmitter;

var eventEmitter = new events();

var server = http.createServer(function(req,res){
    eventEmitter.emit('Dhyey has requested'); //Event Trigger
    res.end('This is a working Server!');
});

eventEmitter.on('Dhyey has requested', function(){ //this function will be called by eventEmitter.emit function
    console.log('A request has been done on the server.');
}); //Event Listener

server.listen('8080','localhost', );