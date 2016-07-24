// function say(word) {
//   console.log(word);
// }
//
// function execute(someFunction, value) {
//   someFunction(value);
// }
//
// execute(say, 'Hello');
// <----- next example --------->
//*** this does the same as above***

// function execute(someFunction, value) {
//   someFunction(value);
// }
//
// execute(function(word) {
//   console.log(word);
// }, 'Hello');

//<-------------next example----------->

// var http = require('http');
//
// function onReq(req, res){
//   console.log('Request received.');
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello World');
//   res.end();
// }
//
// http.createServer(onReq).listen(8000);
//
// console.log('server has started.');

//<-------- next example server in start function ------>

// var http = require('http');
//
// function start() {
//   function onReq(req, res) {
//     console.log('Request received');
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write('Hello World');
//     res.end();
//   }
//   http.createServer(onReq).listen(8888);
//   console.log('Server has started');
// }
//
// exports.start = start;

//<------- next example include url pathname ------>

//<------ next example adding route and pathname ------>

// var http = require('http');
// var url = require('url');
//
// function start(route) {
//   function onReq(req, res) {
//     var pathname = url.parse(req.url).pathname;
//     console.log('Request for ' + pathname + 'received.');
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write('hello World');
//     res.end();
//   }
//   http.createServer(onReq).listen(8888);
//   console.log('Server has started');
// }
//
// exports.start = start;

//<-------- example incorrect handler operation------->

function start() {
  console.log("Request handler 'start' was called.");
  return 'Hello Start';
}

function upload() {
  console.log("Request handler 'upload' was called.");
  return 'Hello Upload';
}

exports.start = start;
exports.upload = upload;
