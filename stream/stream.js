var fs = require('fs')

var ab = '';

//readable stream
var readerStream = fs.createReadStream('File4.txt')


readerStream.setEncoding('utf8')

//Handle stream events --> data,end, error
readerStream.on('data', function(chunk){
    ab += chunk
    console.log(ab)
})

readerStream.on('end', function(){
    console.log(ab)
})