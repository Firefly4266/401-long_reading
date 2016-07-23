'use strict';

// const http = require('http');
// //using const http cannot be reassigned.
// http.createServer(function(req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello World');
//   res.end();
// }).listen(8888);

// <------refactor of above------>
const http = require('http');

function onReq(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World');
  res.end();
}

http.createServer(onReq).listen(8888);
