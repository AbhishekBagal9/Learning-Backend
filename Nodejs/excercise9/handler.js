const {sumCalculator} = require("./sum");
const pathHandler = (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <html>
<head>
<title>Welcome Page</title>
</head>
<body>
  <h1>Welcome to our website!</h1>
  <a href="calculator"> Go to Calculator page</a>
</body>
</html>
    
    `);
  } else if (req.url.toLowerCase() === "/calculator" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
    
    <html>
<head>
<title>Calculator Page</title>
</head>
<body>
  <h1>Calculator Page</h1>
  <form method="POST" action="/calculate-result">
    <input type="number" name="num1" placeholder="Enter first number" required>
    <input type="number" name="num2" placeholder="Enter second number" required>
    <button type="submit">Calculate</button>
  </form>
  <a href="/"> Go to Home page</a>
</body>
    </html>
  
    `);
  } 
  else if (req.url.toLowerCase() === "/calculate-result" && req.method === "POST") {
   return sumCalculator(req, res);
  }
  else {
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <html>  
<head>
<title>404 Not Found</title>
</head>
<body>
  <h1>Page Not Found</h1>
  <a href="/"> Go to Home page</a>
</body>
</html>
`);
  }
};

exports.pathHandler = pathHandler;

//CREATE A SERVER
//CREATE A pathHandler
//CREATE A 404PAGE FOR TESTING
//ALWAYS DO LOWER CASE TO THE RES.URL === NAME.TOLOWERCASE()
//send data to server POST method
//request and route change get method

//on form submit, the data is sent to the server
//the server receives the data and processes it 
//so use post method here
