const fs = require('fs');

let student = {
    name: "Harmanpreet Singh",
    age: "220",
    Title: "Student",
    Language: "python, js, typescript"
}

//let data = JSON.stringify(student, null, 10);
/*
fs.writeFile('student.json', data, (err) => {
    if(err) throw err;

    console.log("Data written to file")
})
*/

fs.readFileSync('student.json',(err, data) => {

    if (err) throw err

    let showData = JSON.parse(data)

    console.log(showData)
})
