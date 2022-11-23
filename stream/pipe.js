var fs = require('fs');

var reader = fs.createReadStream('File2.txt')


var writer = fs.createWriteStream('File4.txt')

writer.on('pipe', ()=>{
    console.log("Piping stream...");
})


reader.pipe(writer)

writer.on('finish', function() {
    return true
})

// var ab ='';

// //readable stream
// var readerStream = fs.createReadStream('File4.txt')


// readerStream.setEncoding('utf8')

// //Handle stream events --> data,end, error
// readerStream.on('data', function(chunk){
//     ab += chunk
//     console.log(ab)
//     console.log("test1")
// })

// readerStream.on('end', function(){
//     console.log(ab)
//     console.log("test2")
// })