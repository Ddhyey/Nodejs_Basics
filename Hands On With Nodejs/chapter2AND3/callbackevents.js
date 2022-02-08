//will print hello world infinitely till the function call stack is externally overridden
(function schedule() {
    setTimeout(function() {
    console.log('Hello World!');
    schedule();
    }, 1000);
    })();

var open = false;
setTimeout(function() {
open = true;
}, 1000)
while(!open) {
// wait
}
console.log('opened!');    