var spawn = require('child_process').spawn;

require('http').createServer(function (req, res) {
    var child = spawn('tail', ['-f', './base.txt']);
    child.stdout.pipe(res);
    res.on('end', function () {
        child.kill();
    });
}).listen(4000);