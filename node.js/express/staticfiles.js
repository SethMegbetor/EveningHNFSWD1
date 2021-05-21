var express = require("express");
var app = express();

app.use(express.static('public'))

app.get("/", function (req, res) {
  res.send("for serving static files");
});

var server = app.listen(3005, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log(`app running at http://localhost:${port}`);
});
