//'use strict';

let arr = [{name: 'Suzanne'}, {name: 'Jim'}, {name: 'Trevor'}, {name: 'Amanda'}];
console.log(arr);
arr.reverse((a, b) => a.name > b.name);
console.log("-------");
console.log(arr);
//arr.sort((a, b) => a.name[1] < b.name[1]);
arr.sort();
console.log("-------");
console.log(arr.reverse());
