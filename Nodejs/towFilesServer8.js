
const fs = require('fs');
const requestHandler = (req,res) =>{
  console.log(req.method, req.url, req.headers);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');

    res.write('<html>');
    res.write('<head><title>Form Data Example</title></head>');
    res.write('<body>');
    res.write('<h1>Form Data Example</h1>');
    res.write('<form action="/submit" method="POST">');
    res.write('<label for="name">Name:</label>');
    res.write('<input type="text" id="name" name="name" required><br>');
    res.write('<label for="surname">Email:</label>');
    res.write('<input type="text" id="surname" name="surname" required><br>');
    res.write('<input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    res.end();
  }

  else if (req.method === 'POST' && req.url.toLowerCase() === '/submit') {
    const body = [];

    req.on('data', (chunk) => {
      console.log(`Received chunk: ${chunk}`);
      body.push(chunk);
    });

    req.on('end', () => {
      const fullBody = Buffer.concat(body).toString();
      console.log('Full body:', fullBody);

      const params = new URLSearchParams(fullBody);
      const paramsObject = {};
      for(const [key, value] of params.entries()) {
        paramsObject[key] = value;    
      }
      console.log('Parsed parameters:', paramsObject);

      fs.writeFile('abhi.txt', fullBody, (err) => {
        if (err) {
          console.error('Error writing to file:', err);
          res.statusCode = 500;
          res.setHeader('Content-Type', 'text/html');
          res.write('<html><body><h1>Error saving data</h1></body></html>');
          return res.end();
        }

        // Redirect to home page
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
      });
    });
  }

  else {
    res.write('<html>');
    res.write('<head><title>404 Not Found</title></head>');
    res.write('<body><h1>Page Not Found</h1></body>');
    res.write('</html>');
    res.end();
  }
}

module.exports = requestHandler;