//Make an HTTP server that serves files. The file path is provided in the URL like this: http://localhost:4000/path/to/myFile
var fs = require('fs'),
http = require('http');
const { dirname } = require('path/posix');
var port = 4000;
http.createServer(function (req, res) {
    //__dirname will access the root folder where this program is present
    //changing the url on browser by adding the file name present in the folder will display the contents of that particular files
    fs.readFile(__dirname+ req.url, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));//this will print the error in json format
      return;
    }
    res.writeHead(200);
    console.log(data );
    res.end(data);
  });
}).listen(port);

