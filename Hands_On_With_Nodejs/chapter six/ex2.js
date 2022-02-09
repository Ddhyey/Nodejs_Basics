var EventEmitter=require('events').EventEmitter, util = require('util');
//HereistheMyClassconstructor:
var Ticker=function(){ 
	var self = this;
	setInterval(function() {
    self.emit("tick");
   // console.log('tick');
  }, 1000);
};
util.inherits(Ticker,EventEmitter);

var tick = new Ticker();
tick.on('tick',function(){
  console.log('TICK');
});