var fs = require('fs');

var reader = fs.createReadStream('File4.txt')

var writer = fs.createWriteStream('Test3.txt')

writer.on('unpipe', () => {
    console.log("Unpipe")
})


reader.pipe(writer)
reader.unpipe(writer)