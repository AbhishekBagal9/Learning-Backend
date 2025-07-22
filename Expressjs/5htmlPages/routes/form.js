const express = require('express');


const formRouter = express.Router()
console.log("✅ formRouter file loaded")

formRouter.get("/form",(req,res,next)=>{
  res.send(`
    <h1> inside form </h1>
      <form action="/Handle/form" method="POST">
    <label for="name">Name</label>
    <input id="name" type="text" name="name">
    <label for="email">Email</label>
    <input type="email" name="email">
    <input type="submit"></input>
  </form>
    `)
})

formRouter.post("/form",(req,res,next)=>{
  const {name,email} = req.body;
  console.log(name,email)
  res.send(`


    <h1>form submitted Thanks</h1>
    `)
})


module.exports = formRouter