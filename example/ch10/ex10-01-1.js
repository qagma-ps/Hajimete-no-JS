'use strict';
const u1 = {name: 'Kazuhiro'};
const u2 = {name: 'Hanako'};
const u3 = {name: 'Ryoko'};
const u4 = {name: 'Tetsuhito'};

const userRoles = new Map();

userRoles.set(u1, 'User');
userRoles.set(u2, 'User');
userRoles.set(u3, 'Administrator');
/*
console.log(userRoles.has(u1));
console.log(userRoles.get(u1));
console.log(userRoles.has(u4));
console.log(userRoles.get(u4));


userRoles.set(u1, 'Administrator');
console.log(userRoles.get(u1));

for(let u of userRoles.keys()){
  console.log(u.name);
}
for(let r of userRoles.values()){
  console.log(r);
}
for(let ur of userRoles.entries()){
  console.log(`${ur[0].name}: ${ur[1]}`);
}
for(let[u,r] of userRoles.entries()){
  console.log(`${u.name}: ${r}`);
}
for(let[u,r] of userRoles){
  console.log(`${u.name}: ${r}`);
}

console.log(userRoles.values());
console.log([...userRoles.values()]);
*/

userRoles.delete(u2);
console.log(userRoles.size);
console.log([...userRoles.values()]);
