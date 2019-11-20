<<<<<<< HEAD
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const URI = "mongodb+srv://nours:nour1236@floristcluster-riqdf.mongodb.net/florist?retryWrites=true&w=majority"
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true}); //, useMongoClient: true

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We're Connected to database!");
});

const FlowerSchema = Schema({
  image1:{type: String}, 
  image2:{type: String}, 
  image3:{type: String},
  dprice:{type: Number},
  pprice:{type: Number},
  sprice:{type: Number},
  deluxdescription:{type:String},
  premiumdescription:{type:String},
  productdescription:{type:String},
  productifo: {type: String},
  rates: {type:Number},
  reviews: {type: String}
})

const Flower = mongoose.model('Flower', FlowerSchema);

const UserSchema = Schema({
  username: {type: String},
  email: {type: String},
  password: {type: String},
  ///token: {type: String}
})

const User = mongoose.model('User', UserSchema);

let save = (flower) => {  
  var store = new Flower({
    dprice: 14
    // image1: flower.image1,
    // image2: flower.image2,
    // image3: flower.image3,
    // dprice: flower.dprice,
    // pprice: flower.pprice,
    // sprice: flower.sprice,
    // productifo: flower.productifo
  })
  store.save();
}

let saveuser = (user) => {  
  var buyer = new User({
  username: user.username,
  email: user.email,
  password:user.password

  })
  buyer.save();
}

module.exports={Flower, User, save, saveuser};
=======
// const mongoose = require  ("mongoose");
// const Schema = mongoose.Schema;

// const app = new Schema ({

// })

// const App = mongoose.model("app", app);

// // app.save((error, result) => {
// //     if(error) {
// //         console.log("app error", error)
// //     } else {
// //         console.log("app saved")
// //     }
// // })

// module.exports.App = App;
>>>>>>> 6eb9101e9bf6f2b848017ac2041c6e0711eca04e
