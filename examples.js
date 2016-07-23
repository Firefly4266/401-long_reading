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

function execute(someFunction, value) {
  someFunction(value);
}

execute(function(word) {
  console.log(word);
}, 'Hello');
