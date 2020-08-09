'use strict';
[Symbol.iterator](){
  let i = 0;
  const messages = this.messages;
  return{
    next: () => i >= messges.length ?
    {value: undefines, done:true}: {value: messages[i++], done: falsej}
  }
}
