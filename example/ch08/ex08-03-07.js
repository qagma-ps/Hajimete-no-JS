'use strict';

const arr = [4,6,16,36];
console.log(arr.some(x => x%2 === 0));
console.log(arr.some(x => Number.isInteger(Math.sqrt(x))));
