const Home = require('../models/addHome');
const Bookings = require('../models/bookings');
const Favourite = require('../models/favourites');

exports.getHomes = (req, res) => {
Home.fetchAll().then(registerHomes =>{
 res.render('store/home-list', {registeredHomes : registerHomes , pageTitle : 'Airnbnb'} ); 
}) // Fetch all registered homes
  // Render the EJS template as HTML
}

exports.getBookings = (req, res) => {
  Bookings.getBookings(BookedId =>{
  Home.fetchAll((homes)=>{
    const getBookedHome = homes.filter((home)=> BookedId.includes(home._id))
    res.render('store/bookings', {bookedHomes:getBookedHome, pageTitle: 'Your Bookings'})
  })
  })
} // Fetch all registered homes
  // Render the EJS template as HTML


exports.getFavourites = (req, res) => {
  Favourite.getFavourites().then(favouritesId => {
    favouritesId = favouritesId.map(fav =>fav.homeId)
    Home.fetchAll().then(registerHomes => {
      console.log(favouritesId)
      const findFavourite = registerHomes.filter(home => favouritesId.includes(home._id.toString()));
        res.render('store/favourite-list', {
        registeredHomes: findFavourite,
        pageTitle: 'Favourites'
      });
    })
  });
};




exports.getHomeDetails = (req, res) => {
  const homeId = req.params.homeId; // Get the homeId from the URL parameters
  Home.fetchById(homeId).then(home => {
    if (!home) {
      return console.log("home not found") // Render a 404 page if home not found
    }else{
      console.log(home);
      res.render('store/home-detail', {home: home, pageTitle: 'Home Details'}); // Render the home details page
    }
  // Render the home details page
})
}

exports.postFavourites = (req,res) =>{
  const homeId = req.body.id;
  const fav = new Favourite(homeId)
fav.save().then(result =>{
  console.log('Fav Added',result)
}).catch(err=>{
  console.log("error while adding in  favourties")
}).finally(()=>{
  res.redirect("/favourites")
})
}

exports.postRemoveFromFavourite = (req, res, next) => {
  const homeId = req.body.id;
  Favourite.deleteById(homeId).then(result =>{
 
}).catch(err=>{
  console.log("error while removing in  favourties")
}).finally(()=>{
  res.redirect("/favourites")
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
 