var fs = require('fs');

var conn = require('net').createConnection('./simp.sock');
conn.on('fd', function (fileDesc) {
    fs.write(fileDesc, "this is the child!\n", function () {
        conn.end();
    });
});