const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path");

const filePath = path.join(rootDir, "data", "homes.json");
module.exports = class Home {
  constructor(addhome, price, location,rating,imageUrl) {
    this.addhome = addhome;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.imageUrl = imageUrl;
  }
  save() {
   Home.fetchAll((registeredHomes) => {
       if(this.id){
      registeredHomes = registeredHomes.map(home =>
       this.id === home.id ? this : home
      );
    }
    else{
        this.id = Math.random().toString();
      registeredHomes.push(this); // Add the new home to the array
  }
    fs.writeFile(filePath, JSON.stringify(registeredHomes), (err) => {
      if (err) {
        console.error("Error writing to file", err);
      } else {
        console.log("Data saved successfully");
      }
    });
  });
}
    
    

  static fetchAll(callback) {
   const filePath = path.join(rootDir, "data", "homes.json");
   fs.readFile(filePath,(err,data) => {
    callback(err ? [] : JSON.parse(data));
   });
   }

   static fetchById(id, callback) {
  Home.fetchAll((homes) => {
    const home = homes.find(h => h.id === id);
    callback(home);
  });
}
}


//we use model for storing logic and data
//fetchAll() method is usually a custom method used to retrieve all stored data entries from a data source (like an array, database, etc.).
