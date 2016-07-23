// function say(word) {
//   console.log(word);
// }
//
// function execute(someFunction, value) {
//   someFunction(value);
// }
//
// execute(say, 'Hello');
// ------------------------------------------------------
//*** this does the same as above***

// function execute(someFunction, value) {
//   someFunction(value);
// }
//
// execute(function(word) {
//   console.log(word);
// }, 'Hello');

//<-------------next example----------->

var http = require('http');

function onReq(req, res){
  console.log('Request received.');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World');
  res.end();
}

http.createServer(onReq).listen(8000);

console.log('server has started.');
