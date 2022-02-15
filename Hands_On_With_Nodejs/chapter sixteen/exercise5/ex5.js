var fs = require('fs');
var options = {
    key: fs.readFileSync('/home/eronkan/Desktop/Nodejs/Nodejs_Basics/Hands_On_With_Nodejs/chapter sixteen/exercise1/client1/client.pem'),
    cert: fs.readFileSync('/home/eronkan/Desktop/Nodejs/Nodejs_Basics/Hands_On_With_Nodejs/chapter sixteen/exercise1/client1/client_cert.pem')
};
var client = require('tls').connect(4001, options, function (err) {
    client.connected = true;
    console.log('connected');
    process.stdin.resume();
    process.stdin.pipe(client);
    client.pipe(process.stdout, {
        end: false
    });
});