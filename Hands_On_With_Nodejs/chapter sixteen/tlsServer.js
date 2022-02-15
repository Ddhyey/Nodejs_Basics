var tls = require('tls');
fs = require('fs');
options = {
    key: fs.readFileSync('/home/eronkan/Desktop/Nodejs/Nodejs_Basics/Hands_On_With_Nodejs/chapter sixteen/my.pem'),
    cert: fs.readFileSync('/home/eronkan/Desktop/Nodejs/Nodejs_Basics/Hands_On_With_Nodejs/chapter sixteen/my_cert.pem')
};

tls.createServer(options, function (s) {
    s.pipe(s);
}).listen(4000);