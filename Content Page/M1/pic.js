const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
//const URI = require("./keys").mongoURI;

//  mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect("mongodb://projectOne:Noran99@cluster0-shard-00-00-9bjuf.mongodb.net:27017,cluster0-shard-00-01-9bjuf.mongodb.net:27017,cluster0-shard-00-02-9bjuf.mongodb.net:27017/PROJECT?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority", () => { }, { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("db connected")
});




const PicSchema = Schema({
    id:{
        type : Number,
    },
    img:{
        type : String,
    },
    name:{
        type : String,
    },
    price1:{
        type : Number,
    },
    price2:{
        type : Number,
    },
    price3:{
        type : Number,
    },
    productInformation:{
        type : String,
    }
  
})


const Item = mongoose.model('Item', PicSchema)


// let save = (items /* TODO */) => {
//     // TODO: Your code here
//     // This function should save a repo or repos to
//     // the MongoDB
//     for (var i = 0; i < items.length; i++) {
//       var name = items[i].name;
//       var price1 = items[i].price1;
//       var price2 = items[i].price2;
//       var price3 = items[i].price3;
//       var productInformation = items[i].productInformation;

    // const x = new Item({
    //     name:name,
    //     price1: price1,
    //     price2:price2,
    //     price3:price3,
    //     productInformation:productInformation
    //      })
    //      x.save();
    // //     }
    // };

    var a = new Item({
        id:5,
        img:"https://res.cloudinary.com/bloomnation/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1511334052/vendor/6263/catalog/product/2/0/20170915101806_file_59bc519e460ac_125_2.jpg",
        name:"Cornucopia Utopia By BloomNation™",
        price1: 53.95,
        price2:63.95,
        price3:73.95,
        productInformation:"A horn of corn has been born! We all love popcorn. Corn mazes delight ..."
    })
    // a.save();

     exports.Item = Item;

 


// // module.exports.Pic = Pic; 
// exports.save = save;
// let save = (items /* TODO */) => {
//     // TODO: Your code here
//     // This function should save a repo or repos to
//     // the MongoDB
//     for (var i = 0; i < items.length; i++) {
//       var productInfo = items[i].productInfo;
//       var productName = items[i].productName;
//       var date = items[i].date;

      
//       var it = new Item({
//         productInfo: productInfo,
//         productName: productName,
//         date: date
//       });
//       // console.log()
//       it.save();
//     }
//    }; //end
//    var x = new Item({
//     productInfo: "olaaaaaa4",
//     productName: "henddddddd4",
//     date: Date.now()
//    });
   //x.save();
   //module.exports.save = save;
//    module.exports.Item = Item;

