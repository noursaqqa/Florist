const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const request = require('request');
var app = express()
var db = require('./db.js');

app.use(express.static(__dirname + '/'));

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 


app.get ('/', (req, res) => {
  res.send('Hello from topreviews server');
});

app.listen(process.env.PORT || 1500); 
console.log('We dance on port', 1500);