const http = require('http');

const server = http.createServer((req, res) => {
res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>This is the heading of response</title></head>');
res.write('<body> This is the body of response</body>')
res.write('</html>');
res.end()});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});