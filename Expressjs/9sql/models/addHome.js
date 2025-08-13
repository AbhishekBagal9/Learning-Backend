const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path");
const db = require('../utils/databaseUtil')


module.exports = class Home {
  constructor(houseName, price, location,rating,url,id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.url = url;
    this.id = id;
  }



save() {
if (this.id) {
      // Update existing home
      return db.execute(
        `UPDATE homes SET houseName=?, price=?, location=?, rating=?, url=? WHERE id=?`,
        [this.houseName, this.price, this.location, this.rating, this.url, this.id]
      );
}
else{
return  db.execute(
    `INSERT INTO homes(houseName, price, location, rating, url)  
     VALUES(?,?,?,?,?)`,[this.houseName,this.price,this.location,this.rating,this.url] //Thi is called sql injection attact
    //and previously hackers ues this to delete database suppose someone use this in the dess field so it will execute two queries and hackers
    //will delte database
  );
}

}

static fetchAll() {
  return db.execute('SELECT * FROM homes')
   }

   static fetchById(id) {
    return db.execute('SELECT * FROM homes WHERE id=?',[id])
}
}


//we use model for storing logic and data
//fetchAll() method is usually a custom method used to retrieve all stored data entries from a data source (like an array, database, etc.).
