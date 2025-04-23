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

fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString())