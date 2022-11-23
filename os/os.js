var os = require('os');


console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());
console.log("Total memory: " + os.totalmem());
console.log("Free memory: " + os.freemem());
console.log(os.hostname())
console.log(os.homedir())
console.log(os.type())
console.log(os.release())
console.log(os.networkInterfaces())
console.log(os.userInfo())  