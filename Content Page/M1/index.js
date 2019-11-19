
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

// var httpProxy = require("http-proxy");
// var Proxy1 = require("../proxy");

app.use(bodyParser.json());

app.use(express.static("client/dist"));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("../public"));

//var proxy = httpProxy.createProxyServer(options);
// let port = 4001;
// app.listen(port, function() {
//   console.log("hi from 4001");
//   console.log("lestining from 4001");
// });

const Item = require("./pic").Item;

app.get('/items', function (req, res) {
  Item.find({})
   .then(items => res.json(items));
    console.log('hahhhaah');
   });
 
  
   app.get('/id', function (req, res) {
     var n = req.query.id;
     console.log(n);

    Item.findOne({ id:n },(err,data) => {
      if(err){
        console.log("error",err);
      }
      console.log(data);
      res.status(200).send(data);
    })
     });

  const port = process.env.PORT || 4001;
  app.listen(port, function() {console.log('listening on port 4001!'); });
  