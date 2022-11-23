//Stream duplex is used to write and read a stream

var fs = require('fs'); 
var data = 'This is Harmanpreet Singh'


//create writeable stream

var writer = fs.createWriteStream('File2.txt')
        
writer.write(data,"UTF8")

writer.end()

writer.on('finish', function() {
    console.log("Data written")
})

var ab = '';

//readable stream
var readerStream = fs.createReadStream('File2.txt')


readerStream.setEncoding('utf8')

//Handle stream events --> data,end, error
readerStream.on('data', function(chunk){
    ab += chunk
})

readerStream.on('end', function(){
    console.log(ab)
})