'use strict';

const Car = (function(){
  const carProps = new WeakMap();
  class Car{
    constructor(maker,model){
      this.maker = maker;
      this.model = model;
      this._userGears = ['P', 'N', 'R', 'D'];
      carProps.set(this, {userGear: this._userGears[0]});
    }
    get userGear(){ return carProps.get(this).userGear;}
    set userGear(value){
      if(this._userGears.indexOf(value)<0){
        throw new Error(`You chose wrong gear: ${value}`);
      }
      carProps.get(this).userGear = value;
    }

    shift(gear){this.userGear = gear;}
  } /*End of Car Class */

  return Car;
})();

const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "3i");
console.log(car1);

car2.shift('R');
console.log(car2.userGear);

car1.userGear = "N";
console.log(car1.userGear);
car1.userGear = "X";
