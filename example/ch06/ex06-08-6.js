'use strict';

const bruce = {Name: "Bruce"};

function update(birthYear, occupation){
  this.birthyear = birthYear;
  this.occupation = occupation;
}

const updateBruce1949 = update.bind(bruce, 1949);

console.log(bruce);
updateBruce1949("Composer");
console.log(bruce);
