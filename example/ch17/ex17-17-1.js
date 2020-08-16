const input = "It was the best of times, it was the worst of times";
const beginning = input.match(/^\w+/);
console.log(beginning[0]);
const end = input.match(/\w+$/);
console.log(end[0]);
const everything = input.match(/^.+$/);
console.log(everything[0]);
const nomatch1 = input.match(/^best/i);
console.log(nomatch1);
const nomatch2 = input.match(/worst$/i);
console.log(nomatch2);

console.log(">-----------<");
