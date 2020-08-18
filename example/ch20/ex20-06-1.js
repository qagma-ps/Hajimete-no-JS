const fs = require('fs');

fs.readdir(__dirname, function(err, files){
  if(err){
    console.error("Fatal Error: unable to read data directory");
    process.exit(1);
  }
  const txtFiles = files.filter(f => /\.txt$/i.test(f));
  if(txtFiles.length === 0){
    console.log("There is no txt file to process.");
    process.exit(0);
  }
  console.log("Processing .txt file...");
});
