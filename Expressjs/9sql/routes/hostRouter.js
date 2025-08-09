const express = require('express');
const homeController = require('../controllers/hostController');


const AddhomeRouter = express.Router();
AddhomeRouter.get('/addhome',homeController.getaddHome); 

//for showing add homes on diffrent page according to case
AddhomeRouter.post('/addhome',homeController.postaddHome); // Handle for

AddhomeRouter.get('/host-home-list',homeController.getHostHomeList); // Route to handle host home list)
AddhomeRouter.get("/edit-home/:homeId",homeController.editHome)
AddhomeRouter.post("/edit-home",homeController.editedhome)


module.exports = AddhomeRouter;

