

// Excercise

// create two dummy and return the reqpath and reqmethod
// in third resturn response 
// also create on more where  show from name email and and form submit show massage form submitted.

const express = require('express');
const bodyParser = require('body-parser');


const app = express()

app.use((req,res,next)=>{
  console.log('helloooooddafdfasfdafdsfasfasdf',req.url,req.method)
  next()
})

app.use((req,res,next)=>{
  console.log('helloooooddafdfasfdafdsfasfasdf',req.url,req.method)
  next()
})



// app.use((req,res,next)=>{
//   console.log('helloooooddafdfasfdafdsfasfasdf',req.path,req.method)
//   res.send("<h1>Hello</h1>");
// })

app.get("/form",(req,res,next)=>{
  res.send(`
    <body>
   <form action="/form" method="POST">
    <input type="text" name="name">
    <input type="email" name="email">
    <input type="submit">
  </form>
  </body>`)
})

app.use(bodyParser.urlencoded())
// undesrstand using midelware how to send response in the same form 
//and do work
app.post("/form",(req,res,next)=>{
  const {name,email} = req.body //we can show this data if we want to show it..
  
  res.send(`<h1>Form submitted sucessfully,we will contact you soon Your Name:${name} and Email:${email}</h1>`)
  
})

app.listen(3000,()=>{
  console.log(`the sever running on http://localhost:3000`)
})