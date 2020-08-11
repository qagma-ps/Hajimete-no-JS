'use strict';

function findNeedle(haystack){
  if(haystack.length === 0) return "Haystack is no more left.";
  if(haystack.shift() == 'needle') return "Found a needle!";
  console.log(haystack);
  return findNeedle(haystack);
}

console.log(findNeedle(['hay', 'hay', 'hay', 'hay', 'needle', 'hay']));
