/*
const text = "Vist oreilly.com today!";
const match = text.match(/[a-z0-9]+(?:\.com|\.org|\.edu)/ig);
console.log(match[0]);
*/

const html = '<link rel="stylesheet" href = "http://insecure.com/stuff.css">\n' + '<link rel="stylesheet" href = "https://secure.com/securestuff.com">\n';
const matches = html.match(/(?:https?:)?\/\/[\w\d][\w\d.-]+[\w\d]+/ig);
console.log(matches);
