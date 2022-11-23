var fs = require('fs');

fs.rename('file3.txt','File3', function(err) {
    if(err){
        throw err
        console.log('File deleted successfully');
    }
}) 