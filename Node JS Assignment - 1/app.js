const addition = require('./Operations/sum.js');
const substraction = require('./Operations/substraction.js');
const multiplication = require('./Operations/multiplication.js');
const division = require('./Operations/division.js');
const calculator = require('./calculator')
const moment = require('moment')

console.log(`Today is: ${moment().format('LLLL')}`);

let a = 3, b = 7;

console.log(`The sum of ${a} & ${b} is: ${calculator.sum(a, b)}`);
console.log(`The multiplication of ${a} & ${b} is: ${calculator.mul(a, b)}`);

a = 10, b = 5;
console.log(`The addition of ${a} and ${b} is: ${addition.add(a, b)}`);
console.log(`The substraction of ${a} and ${b} is: ${substraction.sub(a, b)}`);
console.log(`The multiplication of ${a} and ${b} is: ${multiplication.mul(a, b)}`);
console.log(`The division of ${a} and ${b} is: ${division.div(a, b)}`);