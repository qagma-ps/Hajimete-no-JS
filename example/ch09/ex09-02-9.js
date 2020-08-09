class Super {
  constructor(){
    this.name = 'Super';
    this.isSuper = true;
  }
}
Super.prototype.sneaky = 'Not recommended.';

class Sub extends Super{
  constructor(){
    super();
    this.name = 'Sub';
    this.isSub = true;
  }
}

const obj = new Sub();

for(let p in obj){
  console.log(`${p}: ${obj[p]}` + (obj.hasOwnProperty(p)? '': 'Extends'));
}
