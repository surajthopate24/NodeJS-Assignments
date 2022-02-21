var directory = '../npm/';
var path = require('path');
var fs = require('fs');

fs.readdirSync(directory).forEach(file => {
  if (fs.lstatSync(path.resolve(directory, file)).isDirectory()) {
    console.log('Directory: ' + file);
  } else {
    console.log('File: ' + file);
  }
});