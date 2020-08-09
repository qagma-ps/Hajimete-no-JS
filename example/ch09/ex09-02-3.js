'use strict';

class Car{
  constructor(maker,model){
    this.maker = maker;
    this.model = model;
    this._userGears = ['P', 'N', 'R', 'D'];
    this._userGear = this._userGears[0];
  }

  get userGear(){return this._userGear;}
  set userGear(value){
    if(this._userGears.indexOf(value)<0){
      throw new Error(`You chose wrong Gear: ${value}`);
    }
    this._userGear = value;
  }

  shift(gear){
    this.userGear = gear;
  }
}

const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "3i");
console.log(car1);
console.log(">--------------<")
console.log(car2);

car1.shift('D');
car2.shift('R');
console.log(car1.userGear);
console.log(">---------------<")
console.log(car2.userGear);
console.log(car2._userGear);

//car1.userGear = "X";
