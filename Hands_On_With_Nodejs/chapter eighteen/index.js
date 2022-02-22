var myModule = require('./my_module');
console.log(myModule.functionA());
// => 'you already called this function 1 times';
console.log(myModule.functionA());
// => 'you already called this function 2 times';
console.log(myModule.functionB());
// => 'you already called this function 1 times';

var Line = require('./line');
var line = Line.create(2, 4, 10, 15);
console.log('This line length is ' + line.length());
