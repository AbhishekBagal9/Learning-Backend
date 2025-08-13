const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path");
const { json } = require("stream/consumers");
const fileDataPath = path.join(rootDir,"data","bookings.json")

module.exports = class Bookings{

  static addToBookings(id,callback){
    Bookings.getBookings((bookedId)=>{
      if(bookedId.includes(id)){
        console.log("Booked ID already exist")
      }
      else{
        bookedId.push(id)
        fs.writeFile(fileDataPath,JSON.stringify(bookedId),callback)
      }
    })
  }
  static getBookings(callback){
   fs.readFile(fileDataPath,(err,data)=>{
   callback(!err ? JSON.parse(data) : [])
   })
  }
}