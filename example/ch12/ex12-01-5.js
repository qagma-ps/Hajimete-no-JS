'use strict';

const book = [
  "あるところに初老の夫婦が住んでたとさ。",
  "夫は山へ妻は川へ行ったとさ。",
  "妻が川で選択をしていると、",
  "上流から桃が流れてきたとさ。",
  "ドンブラコッコ、ドンブラッコ、",
  "ドンブラっこ、すってんころり。"
]

const it1 = book.values();
const it2 = book.values();

console.log(it1.next());
console.log(it1.next());

console.log(it2.next());
console.log(it1.next());
