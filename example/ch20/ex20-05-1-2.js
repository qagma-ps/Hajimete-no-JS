const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname, '/hello.txt'),'This is a message from NodeJS\n', function(err){
  if(err) return console.log('Error: cannot write to file!');
})
