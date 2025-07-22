const http = require('http');

const {pathHandler} = require('./handler');
const server = http.createServer(pathHandler);

const port = 3002;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


//CREATE A SERVER AND AND IMPORT THE HANDLER FUNCTION FROM handler.js
//THE SERVER SHOULD LISTEN ON PORT 3002
//THE SERVER SHOULD USE THE pathHandler FUNCTION TO HANDLE REQUESTS
//THE SERVER SHOULD LOG A MESSAGE WHEN IT STARTS



