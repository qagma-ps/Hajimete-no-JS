'use strict';

const tShirts =
  'Small: 9\n'+
  'Medium: 5\n'+
  'Large: 2\n';
const numbers = tShirts.match(/:\s*[0-9]/g);
console.log(tShirts);
console.log(numbers);
