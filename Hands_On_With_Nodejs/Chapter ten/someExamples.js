var fs = require('fs');
const {
    setFlagsFromString
} = require('v8');
var rs = fs.createReadStream('./base.txt', {
    flags: 'r',
    encoding: null,
    fd: null,
    mode: 0666,
    bufferSize: 64 * 1024
});
//parameters passed are 'start and end pos of your file,encoding, flags, buffer size'
var ws = fs.createWriteStream('./base.txt', {
    flags: 'w',
    encoding: null,
    mode: 0666
});