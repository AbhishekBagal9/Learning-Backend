const express = require('express');
const UserRouter = require('./routes/UserRouter')
const formRouter = require('./routes/form')


const app = express();

app.use(UserRouter)
app.use("/Handle",formRouter)
//also add and handling 404 page if user go on unnecessary page

//also add res.status(404) // to understand the usere go on page w hich  is not exist in network tab

app.use((req,res,next)=>{
  res.status(404).send(`<h1>404 page not found </h1>`)
})


app.listen(3000, ()=>{
  console.log(`the server running on http://localhost:3000`)
}) 


///Here we learn in the chapter 4 that we cna create multiple or diffrent routes for handling
//the requests 
//thats it