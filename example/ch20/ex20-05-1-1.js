const fs = require('fs');

fs.writeFile(__dirname + '/hello.txt','This is a message from NodeJS\n', function(err){
  if(err) return console.log('Error: cannot write to file!');
})
