const express = require('express');

const path = require('path');
const {AddhomeRouter} = require('./routes/Addhome');
const HomeRouter = require('./routes/home');
 // Middleware to parse URL-encoded bodies
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__di urname, 'views'));

app.use(HomeRouter)
app.use(AddhomeRouter)

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
})