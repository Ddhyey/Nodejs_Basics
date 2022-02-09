const fs = require('fs');
fs.open('random.json',function(err,fd){
    if(err){
        //handle any exception
        return;
    }
    console.log('file is open and got file descriptor id '+ fd);
})