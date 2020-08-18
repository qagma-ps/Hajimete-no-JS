const debug1 = require('./debug')('1:');
const debug2 = require('./debug')('2:');

debug1("1開始しちゃう！");
//debug2("2開始dkjdぇjljksjぁjdkじゃkじゃkじゃlkじぇぁjkぁj");

for(let i =0; i<10; i++){
  console.log(i);
}

debug1("1終了");
debug2("2終了lっkjdぁjヵjぃえぁjんが；jんけじゃkdじゃ。jぁか。fkぇあ・lkじぇあ");

debug1("1re開始");
debug2("2re開始");

setTimeout(function(){
  debug1('Time has passed...');
  debug2('And what happened?');
}, 200)
