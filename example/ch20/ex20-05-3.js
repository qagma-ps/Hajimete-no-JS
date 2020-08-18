const fs = require('fs');
const path = require('path');

try{
  fs.writeFileSync(path.join(__dirname, '/hello.txt'),"Nodeからのごあいさつです。\n");
} catch(err){
  console.error('Error: Unable to write a file.');
}
