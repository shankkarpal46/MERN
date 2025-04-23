const fs = require('fs')

//Sync...
// fs.writeFileSync("./test.txt","Hello World.")

//Async
// fs.writeFile("./test.txt","Hello World Async",()=>{})

// const result = fs.readFileSync('./contact.txt',"utf-8") //encoding type
// console.log(result)

// Async File Demonstration
// fs.readFile('./contact.txt',"utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err)
//     }
//     else{
//         console.log(result)
//     }
// })

// fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString())

// fs.appendFileSync("./test.txt",`\n Hey There`)

// fs.appendFileSync("./test.txt",`\n ${Date.now()} Hey there`)

// fs.unlinkSync("./copy.txt")

console.log(fs.statSync("./test.txt")) //to check the stats
console.log(fs.statSync("./test.txt").isFile()) //to check whether it is file or not

// fs.mkdirSync("my-docs") //creating a folder or directory

fs.mkdirSync("my-docss/a/b", {recursive:true})