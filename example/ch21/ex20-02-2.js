const obj = {foo: "bar"};
Object.defineProperty(obj, 'color', {
  get: function(){return this.color;},
  set: function(value){this.color = value;}
});

Object.defineProperty(obj, 'name', {
  value: 'Thinsia',
});
Object.defineProperty(obj, 'greet', {
  value: function(){return `Hello, my name is ${this.name}.`;}
})

console.log(obj);
console.log(obj.name);
console.log(obj.greet());
