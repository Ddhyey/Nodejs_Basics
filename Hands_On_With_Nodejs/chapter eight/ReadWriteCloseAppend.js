//FILE FLAGS LIST
/*
r	 To open file to read and throws exception if file doesn’t exists.
r+	 Open file to read and write. Throws exception if file doesn’t exists.
rs+	 Open file in synchronous mode to read and write.
w	 Open file for writing. File is created if it doesn’t exists.
wx	It is same as ‘w’ but fails if path exists.
w+	Open file to read and write. File is created if it doesn’t exists.
wx+	It is same as ‘w+’ but fails if path exists.
a	Open file to append. File is created if it doesn’t exists.
ax	It is same as ‘a’ but fails if path exists.
a+	Open file for reading and appending. File is created if it doesn’t exists.
ax+	It is same as ‘a+’ but fails if path exists.
*/


//OPENING A FILE
// Include the fs module
//var fs = require('fs');
/*
// Open file base.txt in read mode
fs.open('base.txt', 'r', function (err, f) {
    console.log('Saved!');
});
*/


//READING FROM A FILE
/*
var fs = require('fs');
fs.open('1', 'r', function (err, fd) {
    if (err) {
        throw err
    }
    var readBuffer = Buffer.alloc(1024),
        bufferOffset = 0,
        bufferLength = readBuffer.length,
        filePosition = 100;

    fs.read(fd, readBuffer, bufferOffset, bufferLength, filePosition,
        function (err, readBytes) {
            if (err) {
                throw err;
            }
            console.log('just read ' + readBytes + ' bytes');
            console.log('Reading file successful!')
            if (readBytes > 0) {
                console.log(readBuffer.slice(0, readBytes));
            }
        });
});
*/


/*
//WRITING INTO A FILE
var fs = require('fs');

fs.open('1', 'a', function (err, fd) {
    var writeBuffer = new Buffer('writing this string'),
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
});*/



//APPENDING THE FILE
// Appender
var fs = require('fs');
var startAppender = function (fd, startPos) {
    var pos = startPos;
    return {
        append: function (buffer, callback) {
            var oldPos = pos;
            pos += buffer.length;
            fs.write(fd, buffer, 0, buffer.length, oldPos, callback);
        }
    };
};
// start appender
fs.open('base.txt', 'w', function (err, fd) {
    if (err) {
        throw err;
    }
    var appender = startAppender(fd, 0);
    appender.append(new Buffer('Hello Folks this is the proof of using append method in fs module'), function (err) {
        console.log('Our file is Appended');
    });
});