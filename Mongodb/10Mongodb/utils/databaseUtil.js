// 1. Import the entire MongoDB package (like getting the whole toolbox)
const mongo = require("mongodb");

// 2. Extract just the MongoClient (like taking out just the charger from the toolbox)
const MongoClient = mongo.MongoClient;

// 3. Define your MongoDB connection URL (like the address to your database)
const MONGO_URL = "mongodb+srv://abhi:abhi@abhicoding.z6crsvk.mongodb.net/?retryWrites=true&w=majority&appName=AbhiCoding";

let _db; // This will store our active database connection

// 4. Create connection function
const mongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL)
    .then(client => {
      console.log("Successfully connected to MongoDB");
      _db = client.db("airbnb"); // Store the connection to 'airbnb' database
      callback(); // Execute the callback function
    })
    .catch(err => {
      console.log("Error while connecting:", err);
      throw err; // Better error handling
    });
};

// 5. Create function to get the active database connection
const getDB = () => {
  if (!_db) {
    throw new Error("MongoDB not connected!");
  }
  return _db;
};

// 6. Export both functions properly
module.exports = {
  mongoConnect,
  getDB
};