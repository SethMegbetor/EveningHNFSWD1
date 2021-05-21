var express = require("express");
var app = express();

// var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("public"));

app.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

app.get("/process_get", function (req, res) {
  //prepare output in JSON format

  response = {
    first_name: req.query.first_name,

    last_name: req.query.last_name,
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

var server = app.listen(3003, function () {
  var host = server.address().address.address;
  var port = server.address().port;

  console.log(`listening on http://localhost:${port}`);
});
