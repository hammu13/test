var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    
    fs.readFile('fs.js', function (err, data){
        res.write(data)
        return res.end();
    })
    console.log("Server is working!!");
    

}).listen(8080);


