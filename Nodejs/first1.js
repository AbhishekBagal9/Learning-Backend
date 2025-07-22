const fs = require('fs');
                                                          

fs.writeFile('ouput.txt',  'Hellow World"!', (err)=> {
  if(err){
    console.error('Error writing file:', err);
  }
  else {
    console.log('File written successfully');
  }
})


// This is the code of creating file.