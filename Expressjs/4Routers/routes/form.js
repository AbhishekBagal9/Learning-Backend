const express = require('express');


const formRouter = express.Router()
console.log("✅ formRouter file loaded")

formRouter.get("/form",(req,res,next)=>{
  res.send(`
    <h1> inside form </h1>
    `)
})


module.exports = formRouter