var http = require("http");
var fs = require("fs");

http
  .createServer(function (request, response) {
    fs.readFile("./index.html", function (err, data) {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      return response.end();
    });
  })
  .listen(3002);

console.log("server running at http://127.0.0.1:3002/");
