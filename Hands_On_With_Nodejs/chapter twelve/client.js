var net = require('net');
var conn = net.createConnection(4000);
conn.on('connect', function() {
console.log('connected to unix socket server');
});