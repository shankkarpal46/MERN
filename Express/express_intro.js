// const http = require('http')


//Converting Node JS code into Express JS.
const express = require('express') // adding express module.
const app = express() // creating an application on which express will run


app.get("/",(req,res)=>{
    return res.end("Hello from Home Page.")
})

app.get("/about",(req,res)=>{
    return res.end("Hello from About Page. Hey "+req.query.name)
})


app.listen(8000,()=>console.log("Server started...")) 
// Thus in only 7-9 lines of code your server is running, express reduces lines of code.



// Creation of Handler Function.
// function Handler(req,res){
//     const log = `Today's Date:- ${Date.now()}, Current Path:- ${req.url} New Req Recieved\n` // the data to be displayed on file
//     const myUrl = url.parse(req.url,true) // you parse the url 

//     console.log(myUrl)

//     if(req.url === "/favicon.ico") return res.end()

//     // data to be will be appended on file
//     fs.appendFile('log.txt',log,(err,data)=>{
//         switch(myUrl.pathname){ // case are on the bases of pathname.
//             case("/"):
//                 res.end('Hello from the server.')
//                 break
            
//             case("/about"):
//                 // const qp = // it shows the query parameter and keep myUrl true so that you access query parameter
//                 const username = myUrl.query.myname
//                 res.end(`Hi, ${username}`)
//                 break

//             case("/search"):
//                 const search = myUrl.query.search_query
//                 res.end("Here are your search results for "+search)
//                 break

//             default:
//                 res.end("404 Not Found.")
//         }
        
//         // res.end('Hello from the server.') //response is ended message by the server.    
//     })    
// }


// const myServer = http.createServer(app) //calling the Handler function and creating a server.

// myServer.listen(8000,()=>console.log("Server started!...")) // calling the server with port number 8000 and when server started displaying Server started.

