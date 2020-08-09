'use strict';

const words = ["Beachball", "Rodeo", "Angel", "Aardvark", "Xylophone", "November", "Chocolate"];
console.log(words[0]);
console.log(words[0][1]);
console.log(words.push("xyz"));
console.log(words);
const ex = {};
ex[words[0]] = [];
console.log(ex);
console.log(ex[words[0]]);
ex[words[0]].push("abc");
console.log(ex);
