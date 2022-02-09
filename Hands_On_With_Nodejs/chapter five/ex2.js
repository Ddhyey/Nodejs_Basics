//slicing the buffer from previous exercise
const buffer = Buffer.alloc(100);
for(var i  = 0; i<100; i++ ){
    buffer[i]=i;
}
var slicedbuff = buffer.slice(40,60);
console.log(slicedbuff);
