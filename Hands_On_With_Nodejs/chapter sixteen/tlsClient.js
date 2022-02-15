var tls = require('tls'),
    fs = require('fs'),
    port = 4000,
    host = 'localhost',
    options = {
        key: fs.readFileSync('/home/eronkan/Desktop/Nodejs/Nodejs_Basics/Hands_On_With_Nodejs/chapter sixteen/my.pem'),
        cert: fs.readFileSync('/home/eronkan/Desktop/Nodejs/Nodejs_Basics/Hands_On_With_Nodejs/chapter sixteen/my_cert.pem')
    };
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
var client = tls.connect(port, host, options, function () {
    console.log('connected');
    console.log('authorized: ' + client.authorized);
    client.on('data', function (data) {
        client.write(data); // just send data back to server
    });
});