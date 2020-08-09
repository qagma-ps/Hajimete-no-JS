'use strict';

class Car{
  constructor(maker,model){
    this.maker = maker;
    this.model = model;
    this.userGears = ['P', 'N', 'R', 'D'];
    this.userGear = this.userGears[0];
  }
  shift(gear){
    if(this.userGears.indexOf(gear)<0){
      throw new Error(`You did not choose correct gear: ${gear}`);
    }
    this.userGear = gear;
  }
}

const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "3i");
//console.log(car1);
//console.log(">--------------<")
//console.log(car2);

car1.shift('D');
car2.shift('K');
console.log(car1);
console.log(">---------------<")
console.log(car2);
