const inputs =[
  "john@doe.com",
  "john@doe.com is my email",
  "my email is john@doe.com",
  "use my john@doe.com, my email address",
  "my email:john@doe.com",
  "jldjsajohn@doe.comlskje.dklj",
];

const emailMatcher =
  /\b[a-z][a-z0-9._-]*@[a-z][a-z0-9._-]+\.[a-z]+(?:\.[a-z]+)?\b/ig;

const r = inputs.map(s => s.replace(emailMatcher, '<a href="mailto:$&">$&</a>'));
console.log(r);
