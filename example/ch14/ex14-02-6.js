'use strict';

const fs = require('fs');

const fname = 'xxx';
fs.readFile(fname, function(err, data){
  if(err){
    return console.error(`File reading error ${fname}: ${err.message}`);
  }
  console.log(`Show content of file [${fname}]: \n${data}`);
});
