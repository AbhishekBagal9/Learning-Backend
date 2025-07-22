const http = require('http');

const server = http.createServer((req, res) => (
  console.log(req)
))

const PORT = 3000;

server.listen(PORT, () => (
  console.log(`Server is running on http://localhost:${PORT}`)
));


//create a server and listen on port 3000
// and we cann do this we do one thing that is 
// we do basically 
//store port in a variable and then we use that variable
// in the listen method.