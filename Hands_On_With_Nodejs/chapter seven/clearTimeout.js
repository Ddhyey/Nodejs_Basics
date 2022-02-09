// var timeoutHandle = setTimeout(function() { console.log('yehaa!'); }, 1000);
// clearTimeout(timeoutHandle);
var timeoutA = setTimeout(
    function(){
    console.log('Time out A');
},1000);

var timeoutB = setTimeout(function(){
    console.log('Time out B');
    clearTimeout(timeoutA);
},3000);