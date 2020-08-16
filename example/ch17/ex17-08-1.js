const beer99 = "99 bottles of beer on the wall "+ "take 1 down and pass it around --" + "98 bottles of beer on the wall.";
const m4 = beer99.match(/[^ 0-9a-z.]/ig);
const m4String = JSON.stringify(m4);
console.log(m4String);
console.log(m4);
