"use strict";

function formatBinary(x) {
  var y = x.toString(2);
  return ("0000" + y).substr(-4);
}

var FLAG_READ = 1;
var FLAG_WRITE = 2;
var FLAG_EXECUTE = 4;
console.log(formatBinary(FLAG_READ));
console.log(formatBinary(FLAG_WRITE));
console.log(formatBinary(FLAG_EXECUTE));
console.log(formatBinary(FLAG_READ | FLAG_WRITE));
var p = FLAG_READ | FLAG_WRITE;
console.log(formatBinary(p));
var hasWrite = p & FLAG_WRITE ? "Yes" : "No";
console.log("\u66F8\u304D\u8FBC\u307F\u30D1\u30FC\u30DF\u30C3\u30B7\u30E7\u30F3: ".concat(hasWrite));
var hasExecute = p & FLAG_EXECUTE ? "Yes" : "No";
console.log("\u5B9F\u884C\u30D1\u30FC\u30DF\u30C3\u30B7\u30E7\u30F3: ".concat(hasExecute));
console.log(formatBinary(p));
p = p ^ FLAG_WRITE;
console.log(formatBinary(p));
p = p ^ FLAG_WRITE;
console.log(formatBinary(p));
var hasReadAndWrite = p & (FLAG_READ | FLAG_WRITE) ? "Yes" : "No";
console.log("\u8AAD\u307F\u8FBC\u307F\u30D1\u30FC\u30DF\u30C3\u30B7\u30E7\u30F3: ".concat(hasReadAndWrite));