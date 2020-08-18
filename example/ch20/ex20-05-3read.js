const fs = require('fs');
const path = require('path');
const data = fs.readFileSync(path.join(__dirname, 'hello.txt'), {encoding: 'utf8'});
console.log('File content: ');
console.log(data);
