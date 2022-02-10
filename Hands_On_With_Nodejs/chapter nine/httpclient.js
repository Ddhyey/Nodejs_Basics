//http.get()

var http = require('http');

// var options = {
//     host: 'www.google.com',
//     port: 80,
//     path: '/index.html'
// };
// http.get(options, function (res) {
//     console.log('got responses: ' + res.statusCode);
// }).on('error', function (err) {
//     console.log('got error: ' + err.message)
// });

var options = {
    host: 'www.google.com',
    port: 80,
    path: '/upload',
    method: 'POST'
};

var req = require('http').request(options, function (res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
});

// write data to request body
req.write("data\n");
req.write("data\n");
req.end();