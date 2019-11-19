const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const request = require('request');
var app = express()
var db = require('./database/data.js');
var db = require('./database/data.js');

app.use(express.static(__dirname + '/'));

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 


app.get ('/', (req, res) => {
  res.send('Hello from Header server');
});

app.get ('/flower', (req,res) => {
    db.Flower
          .find({})
          .exec((err,data) => { 
        if(err){
          console.log(err);
          req.send()
        }
        res.json(data);
      })  
})

app.get ('/user', (req,res) => {
  // console.log(req.body)
  db.User
        .find({})
        .exec((err,data) => { 
      if(err){
        console.log(err);
        req.send()
      }
      res.json(data);
    })  
})

app.get ('/cart', (req,res) => {
  db.ShoppingCart
        .find({})
        .exec((err,data) => { 
      if(err){
        console.log(err);
        req.send()
      }
      res.json(data);
    })  
})


app.listen(process.env.PORT || 1300); 
console.log('We dance on port', 1300);