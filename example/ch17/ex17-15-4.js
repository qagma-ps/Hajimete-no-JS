let html = `<a class='abc' href="/www.xxx.yyy" id="lmn">xxxのサイト</a>`;
let r = html.replace(/<a .*?(href=(["']).*?\2).*?>/, '<a $1>');
console.log(r);
