const fs = require('fs')

console.log(1)

/*

// Blocking Request
const result = fs.readFileSync("log2.txt","utf-8")
console.log(result)

*/

// Non-Blocking Request
fs.readFile("log2.txt","utf-8",(err,result)=>{
    console.log(result)
})


console.log(2)
