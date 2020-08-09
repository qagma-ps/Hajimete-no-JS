'use strict';

const bruce = {Name: "Bruce"};
const madeline = {Name: "Madeline"};

function update(birthYear, occupation){
  this.birthyear = birthYear;
  this.occupation = occupation;
}

console.log(bruce);
update.apply(bruce, [1949, 'Singer']);
console.log(bruce);

console.log(madeline);
update.apply(madeline, [1942, 'Actress']);
console.log(madeline);
