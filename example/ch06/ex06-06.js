"use strict";

const g = function f(stop){
  if(stop){
    console.log('停止');
    return;
  } else{
    console.log('fは停止していない');
    f(true);
  }
};
g(false);
console.log("------");
g(true);
