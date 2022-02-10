/*
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
http.createServer(function (req, res) {
    if (req.url == '/fileuploaded') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.filepath;
            var newpath = __dirname + files.filetoupload.originalFilename;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    } else {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);*/
var http = require('http'),
    fs = require('fs');

    if (process.argv.length < 5) {
        console.log('Usage: ' + process.argv[0] + ' ' + process.argv[1] + ' ');
        return;
    }


    var options3 = {
        host: process.argv[2],
        port: parseInt(process.argv[3], 10),
        path: '/',
        method: 'PUT'
    };

    var req = http.request(options3);

    console.log('piping ' + process.argv[4]);
    fs.createReadStream(process.argv[4]).pipe(req);
    //This solution is given at end of text book (just for reference)
/*Here we are initializing an HTTP put request on line 44, with the host name and ports passed in as
command line. Then, on line 47 we are creating a read stream from the file name and piping it to
the request object. When the file read stream is finished it will call end() on the request object.
*/    