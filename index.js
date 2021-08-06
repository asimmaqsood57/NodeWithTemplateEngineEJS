const express = require("express");
var bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");

app.use("/assets", express.static("assets")); ///middle ware

var encoder = bodyParser.urlencoded();

app.get("/profile/:name", (req, res) => {
  res.sendFile(__dirname + "/home.html");
  data = {
    email: "asimmaqsood57@gmail.com",
    address: "Mianwali",
    skills: ["node js", "python", "java"],
  };
  console.log(req.params.name);
  res.render("../views/profile", { name: req.params.name, data: data });
  //   res.render("../views/profile");
});
app.get("/login", (req, res) => {
  //   res.sendFile(__dirname + "/home.html");

  console.log(req.query);
  res.render("../views/login");
});
app.post("/login", encoder, (req, res) => {
  //   res.sendFile(__dirname + "/home.html");

  console.log(req.body);
  res.render("../views/home");
});

app.get("/", (req, res) => {
  //   res.sendFile(__dirname + "/home.html");
  res.render("../views/home");
});

app.listen(80);
