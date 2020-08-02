const array1 = [1, 2, 3, 4, 5, 6, 7];
const object = {'A': 'a', 'B': 'b', 'C': 'c'};

console.log(array1);
console.log(object);

for(let item in array1){
  console.log(item);
}
console.log(">----------<");
for(let i =0; i<array1.length; i++){
  console.log(i);
}
console.log(">----------<");
for(let obj in object){
  console.log(obj);
}
console.log("**************");
console.log(object.A)
