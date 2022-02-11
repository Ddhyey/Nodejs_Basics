// use a big file for program to work
require('fs');
require('http').createServer(function (req, res) {
    var rs = fs.createReadStream('base.txt');
    rs.on('data', function (data) {
        if (!res.write(data)) {
            rs.pause();
            console.log('paused');
        }
    });
    res.on('drain', function () {
        rs.resume();
        console.log('drained');
    });
    rs.on('end', function () {
        res.end();
        console.log('ended');
    });
});