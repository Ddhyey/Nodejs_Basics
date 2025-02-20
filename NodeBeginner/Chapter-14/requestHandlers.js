var querystring = require("querystring"),
    fs = require("fs"),
    formidable = require("formidable");

function start(response, postData) {
    console.log("Request handler 'start' was called.");
    var body = '<html>'+
                '<head>'+
                '<meta http-equiv="Content-Type" '+
                'content="text/html; charset=UTF-8" />'+
                '</head>'+
                '<body>'+
                '<form action="/upload" enctype="multipart/form-data" '+
                'method="post">'+
                '<input type="file" name="upload" multiple="multiple">'+
                '<input type="submit" value="Upload file" />'+
                '</form>'+
                '</body>'+
                '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response, request) {
    console.log("Request handler 'upload' was called.");

    var form = new formidable.IncomingForm();
    console.log("about to parse");
    form.parse(request, function(error, fields, files) {
        console.log("parsing done");
        var oldp = files.upload.filepath;
        // var npath = '/home/eronkan/Desktop/Nodejs/Nodejs_Basics/NodeBeginner/Chapter-14/'+files.upload.originalFilename;
        var npath = '/home/eronkan/Desktop/Nodejs/Nodejs_Basics/NodeBeginner/Chapter-14/test.jpg';

        /* Possible error on Windows systems tried to rename to an already existing file */
        fs.rename(oldp, npath, function(error) {
        if (error) {
            throw error;
            // fs.unlink("/tmp/test.png");
            // fs.rename(files.upload.path, "/tmp/test.png");
        }
        response.write('files uploaded and moved');
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("received image:<br/>");
        response.write("<img src='/show' />")
        // console.log(response.write("<img src='/show' />"));
        // response.createReadStream(npath);
        response.end();
    });
});
}

function show(response) {
    
    console.log("Request handler 'show' was called.");
    response.writeHead(200, {"Content-Type": "image/png"});
    fs.createReadStream("./test.jpg").pipe(response);
}

exports.start = start;
exports.upload = upload;
exports.show = show; 