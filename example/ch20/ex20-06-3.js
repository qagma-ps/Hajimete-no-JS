console.log(`Current directory: ${process.cwd()}`);
process.chdir(__dirname);
console.log(`New CWD directory: ${process.cwd()}`);
