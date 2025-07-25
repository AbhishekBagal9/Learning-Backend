const express = require('express');
const homeController = require('../controllers/addHomes');


const AddhomeRouter = express.Router();
AddhomeRouter.get('/addhome',homeController.getaddHome); 

//for showing add homes on diffrent page according to case
AddhomeRouter.post('/addhome',homeController.postaddHome); // Handle for

exports.AddhomeRouter = AddhomeRouter;

