'use strict';

console.log("setTimeoutの前："+ new Date());
function f(){
  console.log("これは関数fの中："+ new Date());
}
setTimeout(f, 5*1000);
console.log("setTimeoutの後");
console.log("これもsetTimeoutの後");
