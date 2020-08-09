class Vehicle {
  constructor(){
    this.passengers = [];
    console.log("Vehicle is generated.");
  }
  addPassenger(p){
    this.passengers.push(p)
  }
}

class Car extends Vehicle {
  constructor(){
    super();
    console.log("Car is generated.");
  }
  deployAirbags(){
    console.log("Boom!");
  }
}

const v = new Vehicle();
v.addPassenger("Hanako");
v.addPassenger("Taro");
console.log(v.passengers);

const c = new Car();
c.addPassenger("Keiko");
c.addPassenger("Midori");
console.log(c.passengers);
c.deployAirbags();

class Motorcycle extends Vehicle{}

const c2 = new Car();
const m = new Motorcycle();
console.log(">-----------------<");
console.log(c instanceof Car);
console.log(c instanceof Vehicle);
console.log(m instanceof Car);
console.log(m instanceof Motorcycle);
console.log(m instanceof Vehicle);
