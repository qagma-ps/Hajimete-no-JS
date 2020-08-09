'use strict';

const getNextRainbowColor = (function(){
  const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Skyblue', 'Purple'];
  let colorIndex = -1;
  return function(){
    if(++colorIndex >= colors.length) colorIndex = 0;
    return colors[colorIndex];
  };
})();

console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
