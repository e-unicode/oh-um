const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
var cors = require("cors");
app.use(cors());

app.listen(8080, function () {
  console.log("listening on 8080");
});

app.use(express.static(path.join(__dirname, '/oh-um-front/build')));

app.get('/', function (req, res) {
    응답.sendFile(path.join(__dirname, '/oh-um-front/build/index.html'));
  });

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "oh-um-front/build/index.html"));
});