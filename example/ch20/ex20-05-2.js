const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, '/hello.txt'),{encoding: 'utf-8'}, function(err, data){
  if(err) return console.log('Error: cannot write to file!');
  console.log('読み込んだファイルの内容: ');
  console.log(data);
})
