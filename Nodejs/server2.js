const http = require('http');


const server = http.createServer((req,res)=>(
  console.log(req)
))

server.listen(3000);


// we create a server and 
// usinglocalhost:3000 we can acess this server
// and we can see the request object in the console.
//so in this code we are creating a server and listening on port 3000.
//but we are creating it maually and acess it manally in google
//but we can use next techinque


