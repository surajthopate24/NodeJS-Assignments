var fs = require('fs');

console.log('Reading the file from Current Directory...');
fs.readFile('test.txt', 'utf8', function(err, data) {  
    if (err) throw err;
    console.log(data);
});