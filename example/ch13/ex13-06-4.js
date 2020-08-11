'use strict';

function sum(arr, f){
  if(typeof f != 'function') f = b => b;

  return arr.reduce((z, b) => z += f(b), 0);
}

function newSummer(f){
  return arr => sum(arr, f);
}

const sumOfSquares = newSummer(x => x*x);
const sumOfCubes = newSummer(x => Math.pow(x, 3));

console.log(sumOfSquares([1,2,3]));
console.log(sumOfCubes([1,2,3]));
