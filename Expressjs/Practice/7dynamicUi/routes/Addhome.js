const express = require('express');
const path = require('path');
const app = express();


const AddhomeRouter = express.Router();
AddhomeRouter.get('/addhome', (req, res) => {
  res.render('addhome',{pageTitle : "Airnbn-AddHome"});  // Just the name without .ejs extension
});

const registeredHomes = [];
//for showing add homes on diffrent page according to case
AddhomeRouter.post('/addhome', (req, res) => {
   // Assuming the input field name is 'Addhome'
   const {addhome,price,location} = req.body;
   const HouseName = {addhome,price,location} 
   registeredHomes.push(HouseName); // Store the home name in an array or database
    console.log('registeredHomes:', registeredHomes);
     res.redirect('/'); // Pass the homeName to the Homeres template
  });

exports.AddhomeRouter = AddhomeRouter;
exports.registeredHomes = registeredHomes; // Export the registeredHomes array
