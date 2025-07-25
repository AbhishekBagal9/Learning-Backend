const express = require('express');

 // Import registeredHomes from Addhome.js

const HomeRouter = express.Router();

const homeController = require('../controllers/home');



HomeRouter.get('/',homeController.getHomes); 



module.exports = HomeRouter;
