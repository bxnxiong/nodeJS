var fs = require('fs');
var filename = process.argv[2];
// var len = undefined;


function logLength(str){
    var len = str.split('\n').length-1
    console.log(len);
}

function readFileAsync(filename, callback){
    fs.readFile(filename, 'utf8', function doneReading(err, str){
        if (err) return console.error(err);
        callback(str)
    })
}

readFileAsync(filename, logLength)