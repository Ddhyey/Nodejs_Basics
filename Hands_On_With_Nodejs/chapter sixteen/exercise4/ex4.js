var fs = require('fs');
var options = {
    cert: fs.readFileSync('/home/eronkan/Desktop/Nodejs/Nodejs_Basics/Hands_On_With_Nodejs/chapter sixteen/exercise2/server-cert.pem'),
    key: fs.readFileSync('/home/eronkan/Desktop/Nodejs/Nodejs_Basics/Hands_On_With_Nodejs/chapter sixteen/exercise2/server-key.pem'),
    ca: fs.readFileSync('/home/eronkan/Desktop/Nodejs/Nodejs_Basics/Hands_On_With_Nodejs/chapter sixteen/exercise1/private/myprivate.pem'),
    requestCert: true,
    rejectUnauthorized: true
};
require('tls').createServer(options, function (socket) {
    socket.on('data', function (data) {
        console.log(data.toString());
    });
    socket.pipe(socket);
}).listen(4001);