'use strict';

function addTimeout(fn, period){
  if(period === undefined) period = 1000;
  return function(...args){
    return new Promise(function(onFulfilled, onRejected){
      const timeoutId = setTimeout(onRejected, period, fn(...args)
      .then(function(...args){
        clearTimeout(timeoutId);
        onFulfilled(...args);
      })
      .catch(function(...args){
        clearTimeout(timeoutId);
        onRejected(...args);
      }));
    });
  }
}

function countdown(seconds){
  return new Promise(function(onFulfilled, onRejected){
    const timeoutIds = [];
    for(let i= seconds; i>=0; i--){
      timeoutIds.push(setTimeout(function(){
        /*
        if(i === 13){
          timeoutIds.forEach(clearTimeout);
          return onRejected(new Error(`${i}という数は不吉です。。。`));
        }
        */
        if(i>0) console.log(i + '...');
        else onFulfilled(console.log("GO!"));
      }, (seconds - i)*1000 ))
    }
  });
}

function launch(){
  return new Promise(function(onFulfilled, onRejected){
    if(Math.random() < 0.5) return;
    console.log("発射！");
    setTimeout(function(){
      onFulfilled("周回軌道に乗った！");
    }, 2*1000);
  });
}

countdown(6)
  .then(addTimeout(launch, 4*1000))
  .then(function(msg){
    console.log(msg);
  })
  .catch(function(err){
    console.error("管制塔、管制塔。トラブル発生..." + err);
  })
