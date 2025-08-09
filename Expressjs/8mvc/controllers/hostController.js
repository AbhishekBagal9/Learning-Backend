const home = require('../models/addHome');
exports.getaddHome = (req, res) => {
  res.render("host/addhome", { pageTitle: "AddHome" ,   editing: false }); // Just the name without .ejs extension
};
 

exports.getHostHomeList = (req, res) => {
home.fetchAll((homes)=>{
 res.render('host/host-home-list', {registeredHomes : homes , pageTitle : 'HostHomeList'} ); 
}); // Fetch all registered homes
  // Render the EJS template as HTML
}


exports.postaddHome = (req, res) => {
  // Assuming the input field name is 'Addhome'
  const { addhome, price, location,rating,imageUrl} = req.body;
  const newHome = new home(addhome, price, location,rating,imageUrl); // Create a new home instance
  newHome.save(); // Save the new home to the registeredHomes array
  res.redirect("/"); // Pass the homeName to the Homeres template
};

exports.editHome = (req,res)=>{
const Id = req.params.homeId;
const editing = req.query.editing === 'true';
  home.fetchById(Id,home=>{
    if(!home){
      console.log("Home not FOund")
    }
  
    res.render("host/addhome", { pageTitle: "HostHomeList", editing:editing, home:home });
  })
  
}
exports.editedhome = (req, res) => {
  const { addhome, price, location,rating,imageUrl,id} = req.body;
  const newHome = new home(addhome, price, location,rating,imageUrl); // Create a new home instance
  newHome.id = id;
  newHome.save(); // Save the new home to the registeredHomes array
  res.redirect("/host-home-list"); // Pass the homeName to the Homeres template
}











// Export the registeredHomes array

// steps 
// model has data and logic 
// declare data and other in it  
// then then use fetchAll] 
// and then acess data 


