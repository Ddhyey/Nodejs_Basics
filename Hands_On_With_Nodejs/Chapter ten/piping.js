// const fs = require('fs');
// //importing module which compressing files
// const zlib = require('zlib');
// const gzip = zlib.createGzip();
// const readStream =fs.createReadStream('./base.txt','utf-8');
// const writeStream = fs.createWriteStream('example.txt.gz');
// // readStream.on('data',(chunk)=>{
// //     writeStream.write(chunk);
// //     console.log('streaming done!')
// // });
// //this below line will do the same function as the above commented funciton
// readStream.pipe(gzip).pipe(writeStream);
// //for piping we need source and destination stream


// uncompressing our compressed file
const fs = require('fs');
const zlib = require('zlib');
const gunzip = zlib.createGunzip();
const readStream =fs.createReadStream('./example.txt.gz');
const writeStream = fs.createWriteStream('uncompressed.txt');
readStream.pipe(gunzip).pipe(writeStream);