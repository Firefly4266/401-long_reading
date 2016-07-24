// 'use strict';

// const http = require('http');
// //using const http cannot be reassigned.
// http.createServer(function(req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello World');
//   res.end();
// }).listen(8888);

// <------refactor of above------>
// const http = require('http');
//
// function onReq(req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello World');
//   res.end();
// }
//
// http.createServer(onReq).listen(8888);

// -------> refactor as per examples <---------

// var http = require('http');
// var url = require('url');
//
// function start(route) {
//   function onReq(req, res) {
//     var pathname = url.parse(req.url).pathname;
//     console.log('Request for ' + pathname + 'received');
//
//     route(pathname);
//
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write('Hello World');
//     res.end();
//   }
//   http.createServer(onReq).listen(8888);
//   console.log('Server has started.');
// }
//
// exports.start = start;

//-----> refactor to add handlers ----->

// var http = require('http');
// var url = require('url');
//
// function start(route, handle) {
//   function onReq(req, res) {
//     var pathname = url.parse(req.url).pathname;
//     console.log('Request for ' + pathname + 'received.');
//
//     route(handle, pathname);
//
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write('Hello World');
//     res.end();
//   }
//   http.createServer(onReq).listen(8888);
//   console.log('Server has started.');
// }
//
// exports.start = start;

//<------ Refactor to demo incorect method ------>

// var http = require('http');
// var url = require('url');
// function start(route, handle) {
//   function onReq(req, res) {
//    var pathname = url.parse(req.url).pathname;
//    console.log('Request for ' + pathname + 'received');
//
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    var content = route(handle, pathname);
//    res.write(content);
//    res.end();
//  }
//   http.createServer(onReq).listen(8888);
//   console.log('Server has started');
// }
//
// exports.start = start;

//<-------Refactoring for a correct solution ------->

var http = require('http');
var url = require('url');

function start(route, handle) {
  function onReq(req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log('Request for ' + pathname + 'received');

    route(handle, pathname, res);
  }
  http.createServer(onReq).listen(8888);
  console.log('Server has started');
}

exports.start = start;
