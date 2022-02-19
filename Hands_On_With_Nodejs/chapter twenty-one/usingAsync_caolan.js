// require('http').createServer(function (req, res) {
//     var body = '';
//     req.setEncoding('utf8');
//     req.on('data', function (data) {
//         body += data;
//     });
//     req.on('end', function () {
//         var number = parseInt(body, 10);
//         var squared = Math.pow(number, 2);
//         res.end(squared.toString());
//     });
// }).listen(4001)

// //async for each
// var async = require('async');
// var request = require('request');

// var collection = [1, 2, 3, 4];

// function iterator(element, next) {
//     request({
//             uri: 'http://localhost:4001/',
//             body: element.toString()
//         },
//         function (err, res, body) {
//             console.log('square of %d is %d', element, body);
//             next(err);
//         });
// }

// function callback() {
//     console.log('finished');
// }
// async.forEach(collection, iterator, callback);

// ////sync.map
// var async = require('async');
// var request = require('request');

// var collection = [1, 2, 3, 4];

// function iterator(element, next) {
//     request({
//             uri: 'http://localhost:4001/',
//             body: element.toString()
//         },
//         function (err, res, body) {
//             next(err, parseInt(body, 10));
//         });
// }
// 1

// function callback(err, result) {
//     console.log('finished.');
//     for (var i in collection) {
//         console.log('the square of %d is %d', collection[i], result[i]);
//     }

// }
// async.map(collection, iterator, callback);

////async.forEachLimit

// var async = require('async');
// var request = require('request');

// var collection = [];
// var maxConcurrency = 5;
// for (var i = 0; i < maxConcurrency; i++) {
//     collection.push(i);
// }

// function iterator(element, next) {
//     request({
//             uri: 'http://localhost:4001/',
//             body: element.toString()
//         },
//         function (err, res, body) {
//             console.log('square of %d is %d', element, body);
//             next(err);
//         });
// }

// function callback() {
//     console.log('finished');
// }

// async.forEachLimit(collection, maxConcurrency, iterator, callback);

////async.detect
var async = require('async');
var exists = require('path').exists;

var files = [
    'filter.js',
    'boomerangEffect.js.js',
    'sample.js',
    'usingAsync_caolan.js',
    'squaring_client_limited.js',
    'squaring_client_map.js',
    'also_does_not_exist_2.js',
    'squaring_server.js'
];

function callback(result) {
    console.log('this file exists: %s', result);
}

async.detect(files, exists, callback);