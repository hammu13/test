var fs = require('fs'); 


//create writeable stream

var writer = fs.createWriteStream('abc.txt')
        
writer.write(data,"UTF8")

writer.end()

writer.on('finish', function() {
    return true
})