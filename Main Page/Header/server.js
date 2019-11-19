const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const request = require('request');

var app = express()
// var db = require('./db.js');




// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//  console.log(" we're connected");
// });

app.use(express.static(__dirname + '/client/src/dist'));
// app.use(express.static(__dirname + '/client/src/components'));

// const App = require("./db.js").App

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 


// app.get ('/processFromData', (req, res) => {
//   res.send('Hello from Header server');
// }); 
app.get ('/app', (req, res) => {

  res.send('Hello from Header server');
});

app.listen(process.env.PORT || 1200); 
console.log('We party on port', 1200);
