var fs = require('fs');
fs.open('base.txt', 'a', function(err, fd) {
    if (err) { throw err; }
    var buffer = new Buffer('7');
    var written = 0;
    (function writeIt() {
        fs.write(fd, buffer, 0 + written, buffer.length - written, 10, function (err, bytesWritten) {
            if (err) { throw err; }
            written += bytesWritten;
            if (written === buffer.length) {
                console.log('changing the content of file is Done');
            } else {
                writeIt();
            }
        });
    })();
});
