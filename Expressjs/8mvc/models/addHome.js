const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path");


module.exports = class Home {
  constructor(addhome, price, location) {
    this.addhome = addhome;
    this.price = price;
    this.location = location;
  }
  save() {
    Home.fetchAll((registeredHomes) => {
    const filePath = path.join(rootDir, "data", "homes.json");
    registeredHomes.push(this); // Add the new home to the array
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
}

//we use model for storing logic and data
//fetchAll() method is usually a custom method used to retrieve all stored data entries from a data source (like an array, database, etc.).
