const {getDB} = require('../utils/databaseUtil');
const { ObjectId } = require("mongodb");


module.exports = class Home {
constructor(houseName, price, location,rating,url,_id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.url = url;
    this._id = _id;
  }

save() {
    const db = getDB()
  if(this._id){
    console.log("editing home")
    const updateFields ={
       houseName: this.houseName,
      price: this.price,
      location: this.location,
      rating: this.rating,
      url: this.url
    }
    return db.collection("homes").updateOne({_id: new  ObjectId(String(this._id))},{$set: updateFields});
    
  }
  else{
 return db.collection("homes").insertOne(this);
  } 
}

static fetchAll() {
  const db = getDB();
  return db.collection("homes").find().toArray()
}

   static fetchById(id) {
    console.log(id)
   const db = getDB();
   return db.collection("homes").find({_id: new  ObjectId(String(id))}).next(); //the id comes in the object
   //so import object id form mongodb then acess id 
}
static delById(id){
  const db = getDB()
  return db.collection('homes').deleteOne({_id: new ObjectId(id)})
}
}


//we use model for storing logic and data
//fetchAll() method is usually a custom method used to retrieve all stored data entries from a data source (like an array, database, etc.).
