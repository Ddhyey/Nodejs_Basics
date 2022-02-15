var https = require('https'),
    fs = require('fs');

var options = {
    key: fs.readFileSync('/home/eronkan/Desktop/Nodejs/Nodejs_Basics/Hands_On_With_Nodejs/chapter Seventeen/private_key.pem'),
    cert: fs.readFileSync('/home/eronkan/Desktop/Nodejs/Nodejs_Basics/Hands_On_With_Nodejs/chapter Seventeen/my_cert.pem')
};

https.createServer(options, function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello World!');
});