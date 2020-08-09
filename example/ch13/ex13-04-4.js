'use strict';

setInterval(function(){
  document.querySelector('.rainbow')
  .style['background-color'] = getNextRainbowColor();
}, 500)

const getNextRainbowColor = (function(){
  const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Skyblue', 'Purple'];
  let colorIndex = -1;
  return function(){
    if(++colorIndex >= colors.length) colorIndex = 0;
    return colors[colorIndex];
  };
})();
