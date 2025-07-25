const registeredHomes = [];
exports.getaddHome = (req, res) => {
  res.render("addhome", { pageTitle: "Airnbn-AddHome" }); // Just the name without .ejs extension
};



exports.postaddHome = (req, res) => {
  // Assuming the input field name is 'Addhome'
  const { addhome, price, location } = req.body;
  const HouseName = { addhome, price, location };
  registeredHomes.push(HouseName); // Store the home name in an array or database
  console.log("registeredHomes:", registeredHomes);
  res.redirect("/"); // Pass the homeName to the Homeres template
};
exports.registeredHomes = registeredHomes; // Export the registeredHomes array
