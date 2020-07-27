const cart =[{Name: "iPhone", Price: 54800}, {Name: "Android", Price: 49800}];
const names = cart.map(x => x.Name);
console.log(names);
const prices = cart.map(x => x.Price);
console.log(prices);
const discountPrices = prices.map(x => x*0.8);
console.log(discountPrices);
const lcNames = names.map(x => x.toLowerCase());
console.log(lcNames);
