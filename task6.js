
var dirname = process.argv[2];
var ext = process.argv[3];
// path.extname('some_path') === ext
var mymodule = require('./task6_module')

function console_log(err, data){
    if (err) return console.error(err)
    data.forEach(function (el){
        console.log(el);
    })
}

mymodule(dirname, ext, console_log)