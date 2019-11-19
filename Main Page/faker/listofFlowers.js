var faker = require('faker');
var Flower = require('.././Mainbody/database/data.js').Flower;

// const URI = "mongodb+srv://nours:nour1236@floristcluster-riqdf.mongodb.net/florist?retryWrites=true&w=majority"
// mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true}); //, useMongoClient: true


for(var i = 0; i < 100; i++){
  var item = new Flower({
    name: faker.name.findName(),
    image: faker.image.nature(),
    dprice: faker.commerce.price(),
    pprice: faker.commerce.price(),
    sprice: faker.commerce.price(),
    deluxdescription: faker.commerce.productAdjective(),
    premiumdescription: faker.commerce.productAdjective(),
    productdescription: faker.commerce.productAdjective(),
    productifo: faker.commerce.productAdjective()
  });
  console.log(item);
  // /item.save();
}