const express = require('express');
const path = require('path');
const app = express();
const {registeredHomes} = require('./Addhome'); // Import registeredHomes from Addhome.js

const HomeRouter = express.Router();

HomeRouter.get('/', (req, res) => {
  res.render('home', {registeredHomes : registeredHomes} );  // Render the EJS template as HTML
});



module.exports = HomeRouter;
