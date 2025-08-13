const home = require('../models/addHome');
exports.getaddHome = (req, res) => {
  res.render("host/addhome", { pageTitle: "AddHome" ,   editing: false }); // Just the name without .ejs extension
};
 

exports.getHostHomeList = (req, res) => {
  home.fetchAll().then(registeredHomes => {
    res.render('host/host-home-list', {
      registeredHomes: registeredHomes,
      pageTitle: 'HostHomeList'
    });
  })
};


exports.postaddHome = (req, res) => {
  // Assuming the input field name is 'Addhome'
  const { houseName, price, location,rating,url} = req.body;
  const newHome = new home(houseName, price, location,rating,url); // Create a new home instance
  // Save the new home to the registeredHomes array
    newHome.save().then(() => {
      console.log("Home saved sucessfully")
      res.redirect("/")
    })
} // Pass the homeName to the Homeres template


exports.editHome = (req,res)=>{
const homeId = req.params.homeId;
const editing = req.query.editing === 'true';
  home.fetchById(homeId).then(home=>{
    if(!home){
      console.log("Home not FOund")
    }
  
    res.render("host/addhome", { pageTitle: "HostHomeList", editing:editing, home:home });
  })
  
}
exports.editedhome = (req, res) => {
  const { houseName, price, location,rating,url,_id} = req.body;
  const newHome = new home(houseName, price, location,rating,url,_id); // Create a new home instance
  newHome.save(); // Save the new home to the registeredHomes array
  res.redirect("host-home-list"); // Pass the homeName to the Homeres template
}

exports.postDelHostHomeList = (req,res)=>{
  const DelId = req.body.homeId;
  home.delById(DelId).then(()=>{
   res.redirect('/host-home-list');
    console.log("deleted sucessfully")
    
  }).catch(err=> console.log(err))
}








// Export the registeredHomes array

// steps 
// model has data and logic 
// declare data and other in it  
// then then use fetchAll] 
// and then acess data 


