var fs = require('fs');
var sequence = 1;
require('http').createServer(function (req, res) {
    var fileName = '/tmp/' + sequence + ' .bin';
    console.log("writing " + fileName);
    var writeStream = fs.createWriteStream(fileName);
    req.pipe(writeStream);
    req.on('end', function () {
        res.writeHead(200);
        res.end();
    });
    sequence++;
}).listen(3000);
