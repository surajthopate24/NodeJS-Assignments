var fs = require('fs')
var concat = require('concat-stream')

console.log('Reading the file test.txt...');
fs.readFile('Concat.txt', 'utf8', function(err, data) {  
    if (err) throw err;
    console.log('Returning the values of the file as an Array:');
    var data = data.split(' ');
    console.log(data);
});
