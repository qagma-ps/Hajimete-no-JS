'use strict';

function countdown(seconds){
  return new Promise(
    function(onFulfilled, onRejected){
      for(let i=seconds; i>=0; i--){
        setTimeout(function(){
          if(i>0) console.log(i + '...');
          else onFulfilled(console.log("GO!"));
        }, (seconds-i)*1000);
      }
    }
  );
}

countdown(5).then(
  function(){
    console.log("Successful countdown!");
  },
  function(err){
    console.log("Resulted in error: "+ err.message);
  }
);
