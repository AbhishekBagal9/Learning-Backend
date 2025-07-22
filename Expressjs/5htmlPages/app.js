const express = require('express');
const UserRouter = require('./routes/UserRouter')
const path = require('path')
const formRouter = require('./routes/form')



const app = express();


app.use(express.urlencoded());  //always use this at top so we can take all the data..

app.use(UserRouter)
app.use("/Handle",formRouter)
//also add and handling 404 page if user go on unnecessary page

//also add res.status(404) // to understand the usere go on page w hich  is not exist in network tab





app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'views','404Page.html' )) //we can create content  of html files in diffrent waysss

})


app.listen(3000, ()=>{
  console.log(`the server running on http://localhost:3000`)
}) 


///Here we learn in the chapter 4 that we cna create multiple or diffrent routes for handling
//the requests 
//thats it