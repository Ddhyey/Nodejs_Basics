var fs = require('fs');
var options = {
    key: fs.readFileSync('/home/eronkan/Desktop/Nodejs/Nodejs_Basics/Hands_On_With_Nodejs/chapter sixteen/exercise2/server-key.pem'),
    cert: fs.readFileSync('/home/eronkan/Desktop/Nodejs/Nodejs_Basics/Hands_On_With_Nodejs/chapter sixteen/exercise2/server-cert.pem'),
    ca: fs.readFileSync('/home/eronkan/Desktop/Nodejs/Nodejs_Basics/Hands_On_With_Nodejs/chapter sixteen/exercise1/private/myprivate.pem')
};
require('tls').createServer(options, function (socket) {
    socket.pipe(socket);
    console.log("Server is running");
}).listen(4001);