require('http').createServer(function(req,res){
        res.writeHead(200,{'Content-type':'text/plain'});
        var interval = setInterval(function(){
            for(var i=0; i<100; i++)
                res.write(Date.now()+"\n");
            clearInterval(interval);
            res.end();
        },1000)
}).listen(8080);