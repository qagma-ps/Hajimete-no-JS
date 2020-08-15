'use strict';
const fs = require('fs');

function readFile(fileName){
  return new Promise(
    (onFulfilled, onRejected) => {
      fs.readFile(fileName, "utf-8", (err,data) =>{
        if(err){
          console.error("readFile error: "+ fileName + err);
          onRejected(err);
        }
        onFulfilled(data);
      });
    }
  );
}

function writeFile(fileName, data){
  return new Promise(
    (onFulfilled, onRejected) =>{
      fs.writeFile(fileName, data, err =>{
        if(err){
          onRejected(err);
        }
        onFulfilled("OK");
      }
    );
  });
}

let allData = "";
readFile("a.txt")
  .then(function(fileData){
    allData += fileData;
    return readFile("b.txt");
  })
  .then(function(fileData){
    allData += fileData;
    return readFile("c.txt");
  })
  .then(function(fileData){
    allData += fileData;
    return writeFile("d.txt", allData);
  })
  .then(function(){
    console.log("ファイルの合体に成功しました。");
  })
  .catch(err => {
    console.log("エラーが発生しました: "+ err);
  });
