var util = require('util');
util.log('Hello');

var util = require('util');
var a = {1: true, 2: false};
console.log(util.inspect(a));
// util.inspect(a, showHidden, depth = 2, showColors);