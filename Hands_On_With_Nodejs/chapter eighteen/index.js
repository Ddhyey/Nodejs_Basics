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
//creating a psuedoClass
var util = require('util'),
    EventEmitter = require('events').EventEmitter;
util.inherits(Line, EventEmitter);

Line.prototype.length = function () {
    return Math.sqrt(
        Math.pow(Math.abs(this.x1 - this.x2), 2) +
        Math.pow(Math.abs(this.y1 - this.y2), 2)
    );
};