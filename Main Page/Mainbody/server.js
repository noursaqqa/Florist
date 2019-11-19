const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const request = require('request');
var app = express()
var db = require('./database/data.js');

app.use(express.static('./client/src/dist'));

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 


app.get ('/', (req, res) => {
  res.send('Hello from Mainbody server');
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

app.get("/save",(req,res)=>{
  db.save()
  res.send("saved")
})

app.listen(process.env.PORT || 1300); 
console.log('Partying on port', 1300);