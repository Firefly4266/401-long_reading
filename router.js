// function route(pathname) {
//   console.log('about to route a request for ' + pathname);
// }
//
// exports.route = route;

//-----> Refactor to include handle feature <------

// function route(handle, pathname) {
//   console.log('About to route a request for ' + pathname);
//   if (typeof handle[pathname] === 'function') {
//     handle[pathname]();
//   }else {
//     console.log('No request handler found for ' + pathname);
//   }
// }
//
// exports.route = route;

// function route(handle, pathname) {
//   console.log('About to handle a request for ' + pathname);
//   if (typeof handle[pathname] === 'function') {
//     return handle[pathname]();
//   }else {
//     console.log('No request handler found for ' + pathname);
//     return '404 Not found';
//   }
// }
//
// exports.route = route;

// <-------Refactor for correct operation ------>

// function route(handle, pathname, res, postData) {
//   console.log('About to route a request for ' + pathname);
//   if (typeof handle[pathname] === 'function') {
//     handle[pathname](res, postData);
//   }else {
//     console.log('No request handler fornd for ' + pathname);
//     res.writeHead(404, {'Content-Type': 'text/plain'});
//     res.write('404 Not found');
//     res.end();
//   }
// }
//
// exports.route = route;

// <------------Refactor for handling uploads ------------>

function route(handle, pathname, res, req) {
  console.log('About to route a request for ' + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](res, req);
  }else {
    console.log('No request handler found for ' + pathname);
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write('404 Not found');
    res.end();
  }
}

exports.route = route;
