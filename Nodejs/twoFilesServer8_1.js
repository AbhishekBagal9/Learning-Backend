const http = require('http');
const requestHandler = require('./towFilesServer8')

const server = http.createServer((requestHandler));

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// we learn here how to create files diffrent and run the server 
//so here we need to create server in first file 
//and in the second file create anynoms fucnction keep it in varibel and export it