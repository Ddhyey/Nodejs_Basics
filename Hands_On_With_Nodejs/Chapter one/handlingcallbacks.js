var myAsyncFunction = function(var1,var2, callback){
    console.log(var1,var2);
    setTimeout(function(){
        callback();
    },1000)
}
const var1 = 100;
const var2 = 120;
myAsyncFunction(var1,var2);