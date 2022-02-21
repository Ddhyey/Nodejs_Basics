// function start() {
//     console.log("Request handler 'start' was called.");
// //Blocking operation, Start will load after 10 seconds
//     function sleep(milliSeconds) {
//         var startTime = new Date().getTime();
//         while (new Date().getTime() < startTime + milliSeconds);
//     }
//     sleep(10000);
//     return "Hello Start";
// }

// function upload() {
//     console.log("Request handler 'upload' was called.");
//     return "Hello Upload";
// }
// exports.start = start;
// exports.upload = upload;
// var exec = require("child_process").exec;

// function start() {
//     console.log("Request handler 'start' was called.");
//     var content = "empty";
//     //exec function will execute in a nonblocking fashion
//     exec("find/", function (error, stdout, stderr) {
//         content = stdout;
//     });
//     return content;
// }

// function upload() {
//     console.log("Request handler 'upload' was called.");
//     return "Hello Upload";
// }
// exports.start = start;
// exports.upload = upload;


/*/The start handler will respond from within the anonymous exec() callback, and the upload handler
//still simply replies with “Hello Upload”, but now by making use of the response object.*/
// var exec = require("child_process").exec;

// function start(response) {
//     console.log("Request handler 'start' was called.");
//     exec("ls -lah", function (error, stdout, stderr) {
//         response.writeHead(200, {
//             "Content-Type": "text/plain"
//         });
//         response.write(stdout);
//         response.end();
//     });
// }

// function upload(response) {
//     console.log("Request handler 'upload' was called.");
//     response.writeHead(200, {
//         "Content-Type": "text/plain"
//     });
//     response.write("Hello Upload");
//     response.end();
// }
// exports.start = start;
// exports.upload = upload;

var exec = require("child_process").exec;

function start(response) {
    console.log("Request handler 'start' was called.");
    exec("find /", {
            timeout: 10000,
            maxBuffer: 20000 * 1024
        },
        function (error, stdout, stderr) {
            response.writeHead(200, {
                "Content-Type": "text/plain"
            });
            response.write(stdout);
            response.end();
        });
}

function upload(response) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {
        "Content-Type": "text/plain"
    });
    response.write("Hello Upload");
    response.end();
}
exports.start = start;
exports.upload = upload;