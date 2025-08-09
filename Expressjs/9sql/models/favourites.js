const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path");
const fileDataPath = path.join(rootDir,"data","favourite.json")

module.exports = class Favourite {
 static addToFavourites(homeId,callback){
  Favourite.getFavourites((favouritesId)=>{
    if(favouritesId.includes(homeId)){
      console.log("home Id already exits")
    }
    else{
     favouritesId.push(homeId)
      fs.writeFile(fileDataPath,JSON.stringify(favouritesId),callback)
    }
  })
 }

 static getFavourites(callback){
  fs.readFile(fileDataPath,(err,data)=>{
    callback(!err ? JSON.parse(data) : [])
  })
 }
 
  static deleteById(delHomeId, callback) {
    Favourite.getFavourites(homeIds => {
      homeIds = homeIds.filter(homeId => delHomeId !== homeId);
      fs.writeFile(fileDataPath, JSON.stringify(homeIds),callback);
    })
  }
};
 
