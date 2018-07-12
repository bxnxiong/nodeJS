var fs = require('fs');
var path = require('path'); 


module.exports = function listFileAsync(dirname, ext, callback){
    fs.readdir(dirname, function doneReading(err, files){
        if (err) return callback(err, null);
        files = files.filter(function (el){
            return path.extname(el) === '.' + ext;
        })
        
        callback(null, files);
    })
}

