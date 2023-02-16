const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// const MongoClient = require("mongodb").MongoClient;
// MongoClient.connect('mongodb+srv://oh-um:qwer1234@oh-um.qnkhin9.mongodb.net/?retryWrites=true&w=majority', function(err, client){
//   if (err) return console.log(err);
//   //서버띄우는 코드 여기로 옮기기
//   app.listen('8080', function(){
//     console.log('listening on 8080')
//   });
// });

//최신버전으로 mongodb 세팅
let db;

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = "mongodb+srv://oh-um:qwer1234@oh-um.qnkhin9.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect((err) => {
  //연결되면 할 일
  db = client.db("oh-um");

  app.listen("8080", function () {
    console.log("listening on 8080");
  });
});

app.use(express.json());
var cors = require("cors");
app.use(cors());

app.use(express.static(path.join(__dirname, "/oh-um-front/build")));

app.get("/", function (req, res) {
  응답.sendFile(path.join(__dirname, "/oh-um-front/build/index.html"));
});

app.post("/", function (req, res) {
  res.send("검색완료");
  console.log(req.body.search);
  db.collection("post").insertOne({ 검색어: req.body.search }, function (err, result) {
    console.log("저장완료");
  });
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/oh-um-front/build/index.html"));
});
