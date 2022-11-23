const fs = require('fs');

let rawdata = fs.readFileSync('json.json')

let student  = JSON.parse(rawdata)

console.log(student)

console.log(rawdata)