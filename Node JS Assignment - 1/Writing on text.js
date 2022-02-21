var fs = require ('fs');

fs.writeFile('WritingOn.txt', "hey ho! let's go", function(err) {
  if (err) throw err;
  console.log('The file has been saved!');
});

fs.appendFile('WritingOn.txt', "\nit's a long way to the top...", function(err) {
    if (err) throw err;
    console.log('The file has been updated!');
  });

fs.readFile('WritingOn.txt', 'utf8', function(err, data) {  
    if (err) throw err;
    console.log(data);
});