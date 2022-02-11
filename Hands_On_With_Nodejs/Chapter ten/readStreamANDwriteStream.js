const fs = require('fs');
const readStream = fs.createReadStream('./base.txt','utf-8');
const writeStream = fs.WriteStream('example.txt');
//readStream object inherits from event emitter class
readStream.on('data',(chunk)=>{
//the call back funtion will be invoked every time it reads a chunk of data
/*
Why chunk?
when you get this chunk , you can immediately start manipulating the chunk
without waiting for the whole file to load.
*/
    //console.log(chunk);
    writeStream.write(chunk);
    console.log('New File written while reading a file')
});
//ending the stream
readStream.on('end', function() {
    console.log('the stream has ended');
})
//resuming the stream
readStream.resume();
//you can also write a buffer
var buffer = new Buffer('this is a buffer with some string');
writeStream.write(buffer);