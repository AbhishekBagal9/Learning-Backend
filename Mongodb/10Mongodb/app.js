const express = require('express');

const path = require('path');
const AddhomeRouter = require('./routes/hostRouter');
const HomeRouter = require('./routes/storeRouter');
const Home = require('./models/addHome');
const {mongoConnect} = require('./utils/databaseUtil');

 // Middleware to parse URL-encoded bodies

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(HomeRouter);
app.use(AddhomeRouter)

mongoConnect(()=>{

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
})
})
