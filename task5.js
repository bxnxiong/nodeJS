var fs = require('fs');
var path = require('path'); 
var dirname = process.argv[2];
var ext = '.'+process.argv[3];
// path.extname('some_path') === ext

function listFile(files){
    // for(i=0;i<list.length;i++){
    files.forEach(function (file){
        if (path.extname(file) === ext){
            console.log(file);
        }
    })
}

function listFileAsync(dirname, callback){
    fs.readdir(dirname, function doneReading(err, files){
        if (err) return console.error(err);
        callback(files)
    })
}

listFileAsync(dirname, listFile)