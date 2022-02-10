//Having a file named base.txt, print bytes 10 to 14.
var fs=require('fs');
fs.open('base.txt','r',function(err,fd){
	if (err) throw err;
var readBuffer = new Buffer(1024),
    bufferOffset = 0,
    bufferLength = 4;
    filePosition = 10;
fs.read(fd, readBuffer, bufferOffset, bufferLength, filePosition, function(err, readBytes) {
	if (err) throw err;
	console.log('just read ' + readBytes + ' bytes'); if (readBytes > 0) {
        console.log(readBuffer.slice(0, readBytes));
      }
	}); 
});