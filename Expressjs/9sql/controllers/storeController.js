const Home = require('../models/addHome');
const Bookings = require('../models/bookings');
const Favourite = require('../models/favourites');

exports.getHomes = (req, res) => {
Home.fetchAll((homes)=>{
 res.render('store/home-list', {registeredHomes : homes , pageTitle : 'Airnbnb'} ); 
}); // Fetch all registered homes
  // Render the EJS template as HTML
}

exports.getBookings = (req, res) => {
  Bookings.getBookings(BookedId =>{
  Home.fetchAll((homes)=>{
    const getBookedHome = homes.filter((home)=> BookedId.includes(home.id))
    res.render('store/bookings', {bookedHomes:getBookedHome, pageTitle: 'Your Bookings'})
  })
  })
} // Fetch all registered homes
  // Render the EJS template as HTML



exports.getFavourites = (req, res) => {
Favourite.getFavourites(favouritesId => {
Home.fetchAll((homes)=>{
  const findFavourite = homes.filter((home)=>favouritesId.includes(home.id))
 res.render('store/favourite-list', {registeredHomes : findFavourite, pageTitle : 'Favourites'} ); 
}); // Fetch all registered homes
  // Render the EJS template as HTML
})
}


exports.getHomeDetails = (req, res) => {
  const homeId = req.params.homeId; // Get the homeId from the URL parameters
  Home.fetchById(homeId, (home) => {
    if (!home) {
      return res.status(404).render('404', { pageTitle: 'Home Not Found' }); // Render a 404 page if home not found
    }else{
      console.log(home);
      res.render('store/home-detail', {home: home, pageTitle: 'Home Details'}); // Render the home details page
    }
  // Render the home details page
})
}

exports.postFavourites = (req,res) =>{
Favourite.addToFavourites(req.body.id,err=>{
if(err){
  console.log("err while making favourites")
}
 res.redirect('/favourites');
})
}

exports.postRemoveFromFavourite = (req, res, next) => {
  const homeId = req.body.id;
  Favourite.deleteById(homeId, error => {
    if (error) {
      console.log('Error while removing from Favourite', error);
    }
    res.redirect("/favourites");
  })
}

exports.postBookings  = (req, res, next) => {
 const homeId = req.body.id;
 Bookings.addToBookings(homeId,err=>{
  if(err){
    console.log("error in finding ID")
  }
  res.redirect("/bookings")
 })

}
 