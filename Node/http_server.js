const http = require('http')

const myServer = http.createServer((req,res)=>{
    console.log("New Req created.") //request is created message.

    
    // console.log(req.headers) //header or meta information

    // console.log(req) // huge request object 
    res.end('Hello from the server.') //response is ended message by the server.
})

myServer.listen(8000,()=>console.log("Server started!..."))
