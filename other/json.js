const fs = require('fs');

fs.readFile('data.json',(err, data) => {

    if (err) throw err

    let showData = JSON.parse(data)

    console.log(JSON.stringify(showData,['age'],10))
    console.log(showData)
})