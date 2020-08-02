const roles = new Set();
roles.add("User");
console.log(roles);
roles.add("Administrator");
console.log(roles);
console.log(roles.size);
roles.add("User");
console.log(roles);

console.log(roles.delete("Administrator"));
console.log(roles);
console.log(roles.delete("Administrator"));
