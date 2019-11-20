const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const request = require('request');

var app = express()
<<<<<<< HEAD
var db = require('./db.js');
var User = require('./db.js').User;
app.use(express.static(__dirname + '/'));
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('./config');
// var AuthController = require('./auth/AuthController');
// app.use('/api/auth', AuthController);
// module.exports = app;
=======
// var db = require('./db.js');




// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//  console.log(" we're connected");
// });

app.use(express.static(__dirname + '/client/src/dist'));
// app.use(express.static(__dirname + '/client/src/components'));

// const App = require("./db.js").App

>>>>>>> 6eb9101e9bf6f2b848017ac2041c6e0711eca04e
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 


<<<<<<< HEAD
app.post('/register', function(req, res) {
    //const body = JSON.parse(req.body)
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    console.log(req.body.username);
    User.create({
      username:req.body.username,
      email: req.body.email,
      password: hashedPassword
    },
    function (err, user) {
      if (err) return res.status(500).send("There was a problem registering the user.")
      // create a token
      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      res.status(200).send({ auth: true, token: token });
    });  

    app.post('/login', function(req, res) {

      User.findOne({ email: req.body.email }, function (err, user) {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');
        
        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
        
        var token = jwt.sign({ id: user._id }, config.secret, {
          expiresIn: 86400 // expires in 24 hours
        });
        
        res.status(200).send({ auth: true, token: token });
      });
      
    });
    
    var new_user = User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
  })
    new_user.save()
    .then(user => res.json(user))
    .catch(err => console.log(err))
=======
// app.get ('/processFromData', (req, res) => {
//   res.send('Hello from Header server');
// }); 
app.get ('/app', (req, res) => {

  res.send('Hello from Header server');
>>>>>>> 6eb9101e9bf6f2b848017ac2041c6e0711eca04e
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
