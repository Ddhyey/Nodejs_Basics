//Do what is asked on exercise 1 and then copy bytes ranging 40 to 60 into a new buffer. And then print it.
const buffersrc = Buffer.alloc(100);
for(var i  = 0; i<100; i++ ){
    buffersrc[i]=i;
    //console.log(buffer[i]);
}
//copying the 20 numbers in buffer
var bufferDest = Buffer.alloc(20);
buffersrc.copy(bufferDest,0,40,60);
console.log(buffersrc);