const express = require('express');

 // Import registeredHomes from Addhome.js

const HomeRouter = express.Router();

const homeController = require('../controllers/storeController');



HomeRouter.get('/',homeController.getHomes); 
HomeRouter.get('/bookings', homeController.getBookings);
HomeRouter.get('/favourites', homeController.getFavourites);
HomeRouter.get('/homedetails/:homeId',homeController.getHomeDetails); 
HomeRouter.post('/favourites/add',homeController.postFavourites)
HomeRouter.post("/favourites/delete", homeController.postRemoveFromFavourite);
HomeRouter.post("/bookings/add",homeController.postBookings)

// Route to handle home details page
 // Route to handle favourites page // Route to handle home list page
// Add more routes as needed for the store functionality
 // Route to handle bookings page usually we create 
//related routers in the same folder.



module.exports = HomeRouter;
