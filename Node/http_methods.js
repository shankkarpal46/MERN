const http = require('http')
const fs = require('fs')

const myServer = http.createServer((req,res)=>{
    const log = `Today's Date:- ${Date.now()}, Method:- ${req.method}, Current Path:- ${req.url} New Req Recieved\n` // the data to be displayed on file
    
    // data to be will be appended on file
    fs.appendFile('log.txt',log,(err,data)=>{
        switch(req.url){
            case("/"):
                if(req.method === 'GET') res.end('Home page.')
                break
            
            case("/about"):
                res.end('I am Shankar')
                break
                
            case("signup"):
                if(req.method ==='GET') res.end('Signup Page')
                else if(req.method ==='POST') res.end('Post request called.')
            break
            default:
                res.end("404 Not Found.")
        }
        
        // res.end('Hello from the server.') //response is ended message by the server.    
    })    
})

myServer.listen(8000,()=>console.log("Server started!..."))

