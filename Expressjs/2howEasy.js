const express = require('express')

const app = express();

app.use((req,res,next) =>{
   res.send('<h1>hello</h1)')
})


app.listen(3000, ()=>{
  console.log(`the server running on http://localhost:3000`)
})

//dont need to write http module express will do it for us 
//then  create app 
//use app for sending response to get reequest 
//then consoling