'use strict';

const arr =[{id: 5, name: "太郎"}, {id: 7, name: "花子"}];
console.log(arr.findIndex(o => o.id === 5));
console.log(arr.find(o => o.id === 5));

const arrNum = [1, 17, 16, 5, 4, 16, 10, 3, 49];
console.log(arrNum.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x)))); 
