var express = require("express");
var app = express();

app.get("/", function (req, res) {
  console.log("got a request from the homepage");
  res.send("hello from homepage GET");
});

app.get("/routing", function (req, res) {
  console.log("got a request from / routing");
  res.send("hello from routing");
});

var server = app.listen(3005, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log(`app running at http://localhost:${port}`);
});
