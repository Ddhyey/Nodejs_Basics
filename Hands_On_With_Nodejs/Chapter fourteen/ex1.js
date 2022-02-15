var spawn = require('child_process').spawn;

require('fs').open(__dirname + '/base.txt', 'a', function (err, fileDesc) {

    var server = require('net').createServer(function (socket) {

        socket.write('Here you go', fileDesc);
        socket.end();
        server.close();
    });

    server.listen(__dirname +'/simp.sock', function () {

        var child = spawn(process.argv[0], [__dirname + '/client.js']);
        child.on('exit', function () {
            console.log('child exited');
        });

    });
});