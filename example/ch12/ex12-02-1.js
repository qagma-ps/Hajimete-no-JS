'use strict';

function* rainbow(){
  yield 'Red';
  yield 'Orange';
  yield 'Yellow';
  yield 'Green';
  yield 'Blue';
  yield 'Purple'
}

const it = rainbow();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

console.log(">----------------<");

for(let color of rainbow()){
  console.log(color);
}
