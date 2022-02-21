const fs = require('fs')

var arr = [];

var file = fs.readFileSync("numbers.txt", "utf8");
var arr = file.split(' ');

arr = arr.map(x => parseInt(x));

console.log(`Numbers: ${arr}`);
console.log(arr.reduce((a, b) => a + b));