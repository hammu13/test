var fs = require('fs');

// Asynchronous read

fs.readFile('File3.txt', function(err, data) {
    if(err){
        return console.log(err);
    }
    console.log("Asynchronous read: " + data.toString());
})

//Synchronous read

var data = fs.readFileSync('File3.txt')

    console.log("Synchronous read: " + data.toString());
    console.log("Progarm Ended!!")
