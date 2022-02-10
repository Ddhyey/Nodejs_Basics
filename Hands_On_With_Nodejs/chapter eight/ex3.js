var fs = require('fs');
fs.open('base.txt', 'r', function(err, fd) {
    if (err) { throw err; }
    function readSome(startingAt, byteCount, callback) {
        var buffer = Buffer(byteCount);
        var readBytes = 0;
        (function readIt() {
            fs.read(fd, buffer, readBytes, buffer.length - readBytes, startingAt + readBytes, function(err, bytesRead) {
                if (err) { throw err; }
                readBytes += bytesRead;
                if (readBytes === buffer.length) {
                    callback(buffer)
                } else {
                    readIt();
                }
            });
        })();
    }
    readSome(4, 5, function(buffer1) {
        console.log(buffer1.toString());
        readSome(9, 5, function(buffer2) {
            console.log(buffer2.toString());
        });
    })
});