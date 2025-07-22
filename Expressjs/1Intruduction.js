
const express = require('express');

const app = express();

app.use("/",(req,res, next) => {
  console.log("came in first url" ,req.url ,req.method);
  next();
}
)

app.get("/next" ,(req,res, next) => {
  console.log("came in sec url" ,req.url ,req.method);
  res.send('<h1>Hello from Express!</h1>'); //sending a response to the browser
}
)
// use app.get and app.post requset to handle response



const PORT = 3000;
app.listen(PORT, () => {   
  console.log(`Server is running on http://localhost:${PORT}`);
});


//creating a middleware function that will log the request url and method
//and then calling the next middleware function in the stack
//if we remove the next only run first middleware function 


//now we are getting the request from the browser but we are not sending any response
//so we need to send a response to the browser