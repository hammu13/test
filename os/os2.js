const os = require('os');


const bytes = '1024'

const mem = os.totalmem()
console.log(mem)
var kb = mem/1024
console.log("KB: " + kb)

var mb = kb/1024
console.log("MB: " + mb)

var gb = mb/1024
console.log("GB: " + gb)