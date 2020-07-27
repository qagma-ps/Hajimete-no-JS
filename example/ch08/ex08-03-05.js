'use strict';

class Person {
  constructor(name){
    this.name = name;
    this.id = Person.nextId++;
  }
}
Person.nextId = 0;
const Ichiro = new Person("Ichiro"),
Jiro = new Person("Jiro"),
Saburo = new Person("Saburo"),
Shiro = new Person("Shiro");

const arr =[Ichiro, Jiro, Saburo, Shiro];

console.log(arr.find(p => p.id === Saburo.id));
console.log(arr.find(function(p) {return p.id === this.id}, Saburo));
console.log(arr.find(p => p.id === this.id, Saburo));
