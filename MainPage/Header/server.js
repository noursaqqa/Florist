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



app.get('/me', function(req, res) {
  var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    
    User.findById(decoded.id, 
      { password: 0 }, // projection
      function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        
        res.status(200).send(user);
    });
  });
});  


app.listen(process.env.PORT || 1200); 
console.log('We party on port', 1200);
