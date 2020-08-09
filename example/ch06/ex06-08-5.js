'use strict';

const bruce = {Name: "Bruce"};
const madeline = {Name: "Madeline"};

function update(birthYear, occupation){
  this.birthyear = birthYear;
  this.occupation = occupation;
}

const updateBruce = update.bind(bruce);

console.log(bruce);
updateBruce(1904, "Actor");
console.log(bruce);

console.log(madeline);
updateBruce.call(madeline, 1274, 'King');
console.log(madeline);
console.log(bruce);
