const names = require("./4-names");
const sayHi = require("./5-utils");

const data = require("./6-alternative-flavor");

// console.log(data);
// { items: [ 'item1', 'item2' ], singlePerson: { name: 'bob' } }

console.log(names);
// { john: 'john', peter: 'peter' }

sayHi("Me");
sayHi(names.john);
sayHi(names.peter);

// Hello there Me
// Hello there john
// Hello there peter

require('./7-mind-grenade')
//the sum is: 15