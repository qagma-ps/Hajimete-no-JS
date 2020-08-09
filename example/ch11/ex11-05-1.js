'use strict';

try{
  console.log("1行目実行中");
  //throw new Error('Error1');
  console.log("When error is thrown before this line, this is now shown.");
} catch(err){
  console.log("Error has happend.");
} finally{
  console.log("This line inside \"Finally\" can happen every time.");
  console.log("Resouces will be released at this stage.");
}
