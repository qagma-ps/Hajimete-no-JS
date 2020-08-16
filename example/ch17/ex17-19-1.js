/*
function validPassword(p){
  return /[A-Z]/.test(p) &&
  /[0-9]/.test(p) &&
  /[a-z]/.test(p) &&
  !/[^a-z0-9A-Z]/.test(p);
}
*/

function validPassword(p){
  return /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])^[a-zA-Z0-9]+$/.test(p);
}

console.log(validPassword("aiueo"));
console.log(validPassword("3aiuEo"));
console.log(validPassword("traveLer2"));
console.log(validPassword("日本語3aB"));
console.log(validPassword("Pocke3"));
console.log(validPassword("Pockë3"));
