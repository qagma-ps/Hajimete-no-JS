'use strict';

function sum(arr, f){
  if(typeof f != 'function') f = b => b;

  return arr.reduce((z, b) => z += f(b), 0);
}
console.log(sum([1,2,4]));
console.log(sum([1,2,4], b => b*b));
console.log(sum([1,2,3], b => Math.pow(b, 3)));
