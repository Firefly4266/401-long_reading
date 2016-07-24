// function start() {
//   console.log("Request handler 'start' was called.");
// }
//
// function upload() {
//   console.log("Request handler 'upload' was called.");
// }
//
// exports.start = start;
// exports.upload = upload;

// <--------example refactor demo wrong way to execute ------>

// function start() {
//   console.log("Request handler 'start' was called.");
//   return 'Hello Start';
// }
//
// function upload() {
//   console.log("Request handler 'upload' was called.");
//   return 'Hello Upload';
// }
//
// exports.start = start;
// exports.upload = upload;

//<-------Refactor to demo blocking vs. non-blocking ------>

// function start() {
//   console.log("Request handler 'start' was called");
//
//   function sleep(milliSeconds) {
//     var startTime = new Date().getTime();
//     while (new Date().getTime() < startTime + milliSeconds);
//   }
//   sleep(10000);
//   return 'Hello Start';
// }
//
// function upload () {
//   console.log("Request handler 'upload' was called");
//   return 'Hello Upload';
// }
//
// exports.start = start;
// exports.upload = upload;

//<------Refactor to demo blocking issues ------>

// var exec = require('child_process').exec;
//
// function start() {
//   console.log("Request handler 'start' was called.");
//   var content = 'empty';
//
//   exec('ls -lah', function(error, stdout, stderr) {
//     content = stdout;
//   });
//   return content;
// }
//
// function upload() {
//   console.log("Request handler 'upload' was called.");
//   return 'Hello Upload';
// }
//
// exports.start = start;
// exports.upload = upload;

// <-------Refactor for proper functionality------->

var exec = require('child_process').exec;

function start(res) {
  console.log("Request handler 'start' was called.");

  /*exec('ls lah', function(error, stdout, stderr) {*/
  exec('find /',
    {timeout: 10000, maxBuffer: 20000*1024},
    function(error, stdout, stderr) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write(stdout);
      res.end();
    });
}

function upload(res) {
  console.log("Request handler 'upload' was called.");
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World');
  res.end();
}

exports.start = start;
exports.upload = upload;
