console.log("setTimeoutの前："+ new Date());
setTimeout( ()=> console.log("アロー関数の中：" + new Date()), 5*1000);
console.log("setTimeoutの後");
