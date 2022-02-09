//types of function declarations
//a no use function, calling with anonymous function in place
/*
function() {
    console.log('hello');
}*/


(function() {
    console.log('hello dd');
    })();
function myFunction () {
   console.log('hello dd');
}
//functions within inner scopes
function myFunction(){
    console.log('hello! dd');
}
(function(){
    myFunction();
})(); 
//describing functions with variables

var myFunc = function(){
    console.log('hello dd');
}
var myFunc2 = myFunc;
//invoking functions
myFunc();
myFunc2();
//directly declaring functions inline
console.log(function(){
    console.log('hello dd');
});