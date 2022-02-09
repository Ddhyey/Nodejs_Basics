//creating psuedo class that ticks every one second
var EventEmitter = require('events').EventEmitter, util = require('util');
var Ticker = function(){
    var self = this;
    setInterval(function(){
        self.emit("tick");
        console.log('tick :>> ');
    },2000);
};
util.inherits(Ticker,EventEmitter);
var tick = new Ticker();
// console.log(tick);
// var a = window.prompt("Enter your num 1: ");
// alert("Your num is " + a);
// var a = window.prompt("Enter your num 2: ");
// alert("Your num is " + a);

const adds = function(a,b) {
    return a + b;
}

tick.on('tick', function() {
    
    console.log('object :>> ',adds(11,22));
});
