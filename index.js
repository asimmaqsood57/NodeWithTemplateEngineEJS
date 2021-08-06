const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.get("/profile/:name", (req, res) => {
  //   res.sendFile(__dirname + "/home.html");
  console.log(req.params.name);
  res.render("../views/profile", { name: req.params.name });
});

app.listen(80);
