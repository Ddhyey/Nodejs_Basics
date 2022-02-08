// Copy buffer
var bufferSrc = new Buffer('ABC');
var bufferDest = Buffer.alloc(3);
bufferSrc.copy(bufferDest);

var Data = bufferDest.toString('utf-8');
console.log(Data);

// Slicing data
var bufferOld = new Buffer('GeeksForGeeks');
var bufferNew = bufferOld.slice(0, 4);
console.log(bufferNew.toString());