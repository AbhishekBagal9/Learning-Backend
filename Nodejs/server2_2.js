//In any case if we want to 
// end server in any wrong
//case we can use
// process.exit(1) to end the server

const http = require('http'); 

const server = http.createServer((req, res) => {
  console.log(req);
  process.exit(); // This will terminate the server immediately
})

const PORT = 3000;  

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
