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

// var exec = require('child_process').exec;
//
// function start(res) {
//   console.log("Request handler 'start' was called.");
//
//   /*exec('ls lah', function(error, stdout, stderr) {*/
//   exec('find /',
//     {timeout: 10000, maxBuffer: 20000*1024},
//     function(error, stdout, stderr) {
//       res.writeHead(200, {'Content-Type': 'text/plain'});
//       res.write(stdout);
//       res.end();
//     });
// }
//
// function upload(res) {
//   console.log("Request handler 'upload' was called.");
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello World');
//   res.end();
// }
//
// exports.start = start;
// exports.upload = upload;

// <------Refactor for post handling. ------>

// var querystring = require('querystring');
// fs = require('fs');
//
// function start(res, postData) {
//   console.log("Request handler 'start' was called");
//
//   var body = '<html>' +
//     '<head>' +
//     '<meta http-equiv="Content-Type" content="text/html; ' + 'charset=UTF-8" />' +
//     '</head>' +
//     '<body>' +
//     '<form action="/upload" method="post">' +
//     '<textarea name="text" rows="20" cols="60"></textarea>' +
//     '<input type="submit" value="Submit text" />' +
//     '</form>' +
//     '</body>' +
//     '</html>';
//
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(body);
//   res.end();
// }
//
// function upload(res, postData) {
//   console.log("Request handler 'upload' was called.");
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write("You've sent the text: " + querystring.parse(postData).text);
//   res.end();
// }
//
// function show(res) {
//   console.log("Request handler 'show' was called.");
//   res.writeHead(200, {'Content-Type': 'image/png'});
//   fs.createReadStream('/tmp/test.png').pipe(res);
// }
//
// exports.start = start;
// exports.upload = upload;
// exports.show = show;

// <------------Refactor for managing uploads ------------>

var querystring = require('querystring');
  fs = require('fs');
  formidable = require('formidable');

function start(res) {
  console.log("Request handler " 'start' " was called");

  var body = '<html>'+
'<head>'+
'<meta http-equiv="Content-Type" '+
'content="text/html; charset=UTF-8" />'+
'</head>'+
'<body>'+
'<form action="/upload" enctype="multipart/form-data" '+
'method="post">'+
'<input type="file" name="upload" multiple="multiple">'+
'<input type="submit" value="Upload file" />'+
'</form>'+
'</body>'+
'</html>';

res.writeHead(200 {'Content-Type': 'text/html'});
res.write(body);
res.end();
}

function upload(res, req) {
  console.log("Request handler 'upload' was called");

  var form = new formidable.IncomingForm();
  console.log('about to parse');
  form.parse(req, (error, fields, files =>) {
    console.log('parsing done');

    fs.rename(files.upload.path, '/temp/test.png', (error =>) {
      if  (error) {
        fs.unlink('/tmp/test.png');
        fs.rename(files.upload.path, '/tmp/test.png');
      }
    });
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('received image:<br/>');
    res.write('<img scr='/show' />');
    res.end();
  });
}

function show(res) {
  console.log("request handler 'show' was called.");
  res.writeHead(200, {'Content-Type': 'text/plain'});
  fs.createReadStream('/tmp/test.png').pipe(res);
}

exports.start = start;
exports.upload = upload;
exports.show = show;
