'use strict';

function countdown(seconds){
  return new Promise(
    function(onFulfilled, onRejected){
      const timeoutIds = [];
      for(let i=seconds; i>=0; i--){
        timeoutIds.push(setTimeout(function(){
          if(i === 13) {
            timeoutIds.forEach(clearTimeout);
            return onRejected(new Error("This is ominous number..."));
          }
          else if(i>0) {
            console.log(i + '...');
          }
          else {
            onFulfilled(console.log("GO!"));
          }
        }, (seconds-i)*1000));
      }
    }
  );
}

/*
countdown(5).then(
  function(){
    console.log("Successful countdown!");
  },
  function(err){
    console.log("Resulted in error: "+ err.message);
  }
);
*/

const p = countdown(15);
p.then(function(){
  console.log("Successfully countdown started!");
});
p.catch(function(err){
  console.log("Problem happened while conducting countdown." + err.message);
});
