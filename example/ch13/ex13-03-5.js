'use strict';

function get RainbowInterator(){
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  let colorIndex = -1;
  return {
    next() {
      if(++colorIndex >= colors.length) colorIndex = 0;
      console.log("in iterator: "+ colors[colorIndex])
      return {value: colors[colorIndex], done: false};
    }
  };
}

const RainbowInterator = getNextRainbowColor();
setInterval(function(){
  document.querySelector('.rainbow')
  .style['background-color'] = rainbowIterator.next().value;
}, 500);
