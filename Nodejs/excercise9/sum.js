const sumCalculator = (req,res)=>{
const body = [];
req.on("data", chunk => body.push(chunk));  // the pices of chunck will come and the data will go 
//in body array we are storing it.
req.on("end",()=>{
  const parsedBody = Buffer.concat(body).toString(); // we are converting the body to string
 const params = new URLSearchParams(parsedBody); //this is like translator convert the data to key value pair
 const bodyObj = Object.fromEntries(params); // now this convert the data in object format
 console.log(bodyObj);
 const result = parseInt(bodyObj.num1 )+ parseInt(bodyObj.num2); // we are adding the two numbers
 console.log(result);
 res.setHeader("Content-Type", "text/html");

 //so understand  why we are  writing the res.write  here in on method beacuse when the funciton is callded and things
 //then we are printing the result thats it.. 
  res.write(`
  <html>
  <head>
  <title>Calculator Result</title>
  </head>
  <body>
  <h1>Calculator Result</h1>
  <p>The sum of ${bodyObj.num1} and ${bodyObj.num2} is ${result}</p>
  <a href="/calculator"> Go to Calculator page</a>
  <a href="/"> Go to Home page</a>
  </body>
  </html>
  `);


})
}

exports.sumCalculator = sumCalculator;



// even we are taking a type as number, it will be converted to string when form is submitted;
//so our data will come in parts called chunks 
//so we will store them in body array
//then take all arr chunks in single buffer using concat method
//then convert it to string beacuse when we send data it is come in binary format using toString method we will convert it to string;

