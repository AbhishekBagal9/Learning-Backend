const express = require('express');

const  UserRouter = express.Router();




UserRouter.get("/",(req,res,next)=>{
  res.send(`
  <h1>Welcome to the Home Page </h1>
  <a href="/Handle/form">go to form page </a>
    
    `)
})

module.exports = UserRouter;