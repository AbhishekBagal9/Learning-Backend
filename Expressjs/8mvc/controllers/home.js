const { registeredHomes } = require('./addHomes');

exports.getHomes = (req, res) => {
  res.render('home', {registeredHomes : registeredHomes , pageTitle : 'Airnbnb'} );  // Render the EJS template as HTML
}