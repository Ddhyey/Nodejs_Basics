var fs = require('fs');
fs.open('base.txt', 'w', function (err, fd) {
    var writeBuffer = new Buffer('ABCDEFGHIJLKLMNOPQRSTUVXYZ0123456789abcdefghijklmnopqrstuvxyz'),
        bufferOffset = 0,
        bufferLength = writeBuffer.length,
        filePosition = null;

    fs.write(
        fd,
        writeBuffer,
        bufferOffset,
        bufferLength,
        filePosition,
        function (err, written) {
            if (err) {
                throw err;
            }
            console.log('wrote ' + written + ' bytes');
        }
    );
});