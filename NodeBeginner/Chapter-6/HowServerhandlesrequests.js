var http = require("http");

function onRequest(request, response) {
    console.log("Request received.");
    response.writeHead(200, {
        "Content-Type": "text/plain"
    });
    response.write("When the callback fires and our onRequest() function gets triggered, two parameters are passed into it: request and response");
    response.write("Those are objects, and you can use their methods to handle the details of the HTTP request that \n occured and to respond to the request (i.e., to actually send something over the wire back to the browser that requested your server).\n  And our code does just that: Whenever a request is received, it uses the response.writeHead() function to send an HTTP status 200 and content-type in the HTTP response header, and the response.write() function to send the text “Hello World” in the HTTP response body. \n At last, we call response.end() to actually finish our response.")
    response.end();
}

http.createServer(onRequest).listen(8888);

console.log("Server has started..")