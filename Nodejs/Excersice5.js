const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Excersice 5</title></head>');
    res.write('<body>');
    res.write('<h1>MYntra page Excersice</h1>');
    res.write('<div><ul style="display: flex; gap:5px; list-style:none;"><li> <a href="HomePage">Home </a></li> <li> <a href="mens-page">men</a></li> <li>women</li> <li>kids</li> <li>cart</li></ul></div>');
    res.write('</body')
    res.write('</html>');
    res.end();
  }else if(req.method === 'GET' && req.url.toLowerCase() === '/homepage'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Home Page</title></head>');
    res.write('<body>');
    res.write('<h1>Welcome to the Home Page</h1>');
    res.write('<a href="/">go to home page</a>/');
    res.write('</body>');
    res.write('</html>');
    res.end();
  } else if(req.method === 'GET' && req.url.toLowerCase() === '/mens-page'){
    res.setHeader('Content-Type', 'text/html');   
    res.write('<html>');
    res.write('<head><title>Men\'s Page</title></head>');
    res.write('<body>');
    res.write('<h1>Welcome to the Men\'s Page</h1>');
    res.write('<a href="/">go to home page</a>/');        
    res.write('</body>');
    res.write('</html>');
    res.end();

}})

  const PORT = 3000;
  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

