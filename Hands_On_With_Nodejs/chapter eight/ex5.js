var fs = require('fs');
fs.open('base.txt', 'a', function (err, fd) {
    var buffup = new Buffer("this is updated string 'abc'"),
        bufferOffset = 0,
        bufferLength = buffup.length,
        filePosition = null;
    fs.write(
        fd,
        buffup,
        bufferOffset,
        bufferLength,
        filePosition,
        function (err, appended) {
            if (err) {
                throw err;
            }
            console.log('Appended' + appended + ' bytes');
        }
    )

});