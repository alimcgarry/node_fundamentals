const internals = require("./internals");

function request(url, data) {
  internals.send(url, data);
  return internals.read();
}

console.log(request("http://www.google.com", "data"));
