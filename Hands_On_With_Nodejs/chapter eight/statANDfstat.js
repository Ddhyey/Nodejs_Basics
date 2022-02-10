var fs = require('fs');
fs.stat('data.json',function(err,stats){
    if(err){
        console.log(err.message);
        return;
    }
    //console.log(stats);
    //console.log('this file is'+stats.size + 'bytes long');
    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats.isBlockDevice());
    console.log(stats.isCharacterDevice());
    console.log(stats.isSymbolicLink());
    console.log(stats.isSocket());
});
/*Other functions of stat
stats.isFile()
stats.isDirectory()
stats.isBlockDevice()
stats.isCharacterDevice()
stats.isSymbolicLink()
stats.isFIFO()
stats.isSocket()
*/