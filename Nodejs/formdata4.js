const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  
 if( req.url === '/' ){
  res.setHeader('Content-Type', 'text/html')
  
 res.write('<html>');
  res.write('<head><title>Form Data Example</title></head>'); 
  res.write('<body>');
  res.write('<h1>Form Data Example</h1>');
  res.write('<form action="/submit" method="POST">');
  res.write('<label for="name">Name:</label>');
  res.write('<input type="text" id="name" name="name" required><br>');
  res.write('<label for="email">Email:</label>');
  res.write('<input type="email" id="email" name="email" required><br>');
  res.write('<input type="submit" value="Submit">');
  res.write('</form>');
  res.write('</body>');
  res.write('</html>');
  res.end();
 } 
 else if(req.method === 'POST' && req.url.toLocaleLowerCase() === '/submit'){
      res.setHeader('location', '/');
      res.statusCode = 302; // Redirect status code

      fs.writeFile('abhi.txt','Form submitted successfully!' ,(err) => {
        if (err) {  
          console.error('Error writing to file:', err);
          res.statusCode = 500; // Internal Server Error
          res.write('<html><body><h1>Error saving data</h1></body></html>');
          return res.end();
        }
        });
        
      res.end();
 }
 else{
  res.write('<html>');
  res.write('<head><title>404 Not Found</title></head>');
  res.write('<body><h1>Page Not Found</h1></body>');
  res.write('</html>');
  res.end();
 }

  }
);

const PORT = 3000;
server.listen(PORT, () => {   
  console.log(`Server is running on http://localhost:${PORT}`);
});