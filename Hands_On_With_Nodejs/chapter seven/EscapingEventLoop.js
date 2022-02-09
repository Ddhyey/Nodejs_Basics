// process.nextTick(function() {
//     // this runs on the next event loop
//     console.log('yay!');
// });
// process.nextTick(function() {
//     // do something
// });
var async = function () {
    console.log("Hi Hello How Are");
}
//var async = require('async');
var interval = 1000; // 1 second
(function schedule() {
    setTimeout(function () {
        async (function () {
            console.log('async is done!');
            schedule();
        });
    }, interval)
})();