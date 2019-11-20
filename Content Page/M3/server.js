const express = require("express");
let app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(express.static("client/dist"));
app.use(bodyParser.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static("../public"));

const Item = require("./pic").Item;

app.get("/items", (req, res) => {
  console.log("i'm inside the get");
  Item.find({})
    .sort({ date: -1 })
    .then(items => res.json(items), console.log("items inside the.Get server"));
  // .then(items => res.json(items));
});

app.get("/id", function(req, res) {
  var n = req.query.id;
  console.log(n);

  Item.findOne({ id: n }, (err, data) => {
    if (err) {
      console.log("error", err);
    }
    console.log(data);
    res.status(200).send(data);
  });
});
//var proxy = httpProxy.createProxyServer(options);
let port = process.env.PORT || 4003;
app.listen(port, function() {
  console.log("hi from 4003");
  console.log("lestining from 4003");
});
