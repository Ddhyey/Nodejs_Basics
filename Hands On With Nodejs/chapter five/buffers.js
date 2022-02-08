// Different Method to create Buffer
var buffer1 = Buffer.alloc(100);
var buffer2 = new Buffer('GFG');
var buffer3 = Buffer.from([1, 2, 3, 4]);

// Writing data to Buffer
buffer1.write("Happy Learning");

// Reading data from Buffer
var a = buffer1.toString('utf-8');
console.log(a);

// Check object is buffer or not
console.log(Buffer.isBuffer(buffer1));

// Check length of Buffer
console.log(buffer1.length);



// concatenate two buffer
var bufferOne = new Buffer('Happy Learning ');
var bufferTwo = new Buffer('With GFG');
var bufferThree = Buffer.concat([bufferOne, bufferTwo]);
console.log(bufferThree.toString());



