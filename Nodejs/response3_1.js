//Diffrent response according to the request 
//we can send diffrent pages 
  
const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  
  if (req.url === '/') {
    res.write('<html>');
    res.write('<head><title>Home Page</title></head>');
    res.write('<body><h1>Welcome to the Home Page</h1></body>');
    res.write('</html>');
   
  } else if (req.url === '/about') {
    res.write('<html>');
    res.write('<head><title>About Page</title></head>');
    res.write('<body><h1>About Us</h1></body>');
    res.write('</html>');
  } else {
    res.write('<html>');
    res.write('<head><title>404 Not Found</title></head>');
    res.write('<body><h1>Page Not Found</h1></body>');
    res.write('</html>');
  }
  
  res.end();
});


const PORT = 3000;  
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});