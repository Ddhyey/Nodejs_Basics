//initiate a buffer of size hundred
//add 0 to 99 to this buffer
const buffer = Buffer.alloc(100);
for(var i  = 0; i<100; i++ ){
    buffer[i]=i;
    console.log(buffer[i]);
}