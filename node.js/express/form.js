var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/form.html", function (req, res) {
  res.sendFile(__dirname + "/" + "form.html");
});

app.get("/process_get", function (req, res) {
  //preparing the output in JSON format
  response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name,
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

var server = app.listen(3005, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log(`app running at http://localhost:${port}`);
});
