
var count= 0;
var fs = require('fs')
var path = require('path')
var fileType = process.argv[3];
fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + process.argv[3])
      console.log(file)
    console.log("There are " + (count) + "files containing the file extension" + (fileType)+ "in this folder");
  })
})