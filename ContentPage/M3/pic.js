const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = require("bluebird");
// mongoose.connect("mongodb://localhost/flowers");
// const URI = require("./config/keys").mongoURI;
mongoose.connect(
  "mongodb://projectOne:Noran99@cluster0-shard-00-00-9bjuf.mongodb.net:27017,cluster0-shard-00-01-9bjuf.mongodb.net:27017,cluster0-shard-00-02-9bjuf.mongodb.net:27017/PROJECT?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
  () => {},
  { useNewUrlParser: true }
);
// mongoose.Promise = global.Promise
// mongoose.connect(URI, { useMongoClient: true, options: { promiseLibrary: mongoose.Promise }});

var db = mongoose.connection;
mongoose.set("useCreateIndex", true);
db.on("error", error => console.log(error, "error"));
db.once("connected", function() {
  console.log("we're connected db!");
});
let FlowerSchema = Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price1: {
    type: Number,
    required: true
  },
  price2: {
    type: Number,
    required: true
  },
  price3: {
    type: Number,
    required: true
  },
  productInformation: {
    type: String,
    required: true
  }
});

const Item = mongoose.model("Item", FlowerSchema);
/******************************************************* function save ********************************************************/
// let save = (items /* TODO */) => {
//   // TODO: Your code here
//   // This function should save a repo or repos to
//   // the MongoDB
//   for (var i = 0; i < items.length; i++) {
//     var productInfo = items[i].productInfo;
//     var productName = items[i].productName;
//     var date = items[i].date;
//     var it = new Item({
//       productInfo: productInfo,
//       productName: productName,
//       date: date
//     });
//     // console.log()
//     it.save();
//   }
// }; //end
///***************************************************************************************************************************/

// module.exports.save = save;
module.exports.Item = Item;
