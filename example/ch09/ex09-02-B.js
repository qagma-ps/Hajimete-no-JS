class Car {
  constructor(){

  }
}

class InsurancePolicy{
  /*Insurance Constract*/
}

function makeInsurable(o){
  o.addInsurancePolicy = function(p){this.insurancePolicy = p;}
  o.getInsuracePolicy = function(){return this.insurancePolicy;}
  o.isInsured = function(){return !!this.insurancePolicy;}
}

makeInsurable(Car.prototype);

const car1 = new Car();
console.log(car1.isInsured());
car1.addInsurancePolicy(new InsurancePolicy());
console.log(car1.isInsured());

const car2 = new Car();
console.log(car2.isInsured());
car2.addInsurancePolicy(new InsurancePolicy());
console.log(car2.isInsured());
