//spawining
var spawn = require('child_process').spawn;

var child = spawn('tail', ['-f', './base.txt']);
child.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
    child.kill(); //killing
});
child.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
});

