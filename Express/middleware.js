const express = require('express')
const fs = require('fs') // since file system is used to store data, instead of database .
const users = require('./MOCK_DATA.json')
const app = express()

const PORT = 8000

// Middleware used to extract data from the body, else it would be undefined. 
app.use(express.urlencoded({extended:false})) // In inbuild middleware next() is automatically called.


// Custom Middleware 1
app.use((req,res,next) =>{
    console.log("Hello from middleware 1.") // If you don't end the response or call the next(), then the request is hold by the middleware and process gets paused.

    req.myUserName = "shankkarpal.dev" // will use this variable in middleware 2.

    // return res.json({msg:'Hello from middleware 1'}) // If you end the response will calling next(), then rest of the code is not interpreted.
    
    next() // the response will go the next middlware or rest of code will be interpreted  
})


//Custom Middleware 2
app.use((req,res,next) =>{
    console.log("Hello from middleware 2."+req.myUserName) // If you don't end the response or call the next(), then the request is hold by the middleware and process gets paused.
    
    // return res.json({msg:'Hello from middleware 1'}) // If you end the response will calling next(), then rest of the code is not interpreted.
    
    // return res.end("Hey") // the response will go the next middlware or rest of code will be interpreted

    fs.appendFile('log2.txt',`\n${Date.now()}: ${req.method}: ${req.path}.`,(err,data)=>{
        next()
    })
    
    // next()
})


// GET /api/users - List all users
app.get("/api/users",(req,res)=>{
    console.log("I am in get route."+req.myUserName) // even get route has access to the middleware variables.
    return res.json(users)
})


// GET /users - HTML Document Render 
app.get("/users",(req,res)=>{
    const html = `
        <ul>
            ${users.map(user=>`<li>${user.first_name}</li>`).join("")} 
        </ul>
    ` 
    res.send(html)
})

// routing the api having same URL.
app.route("/api/users/:id")
.get((req,res)=>{
    const id = Number(req.params.id)
    
    const user = users.find(user => user.id === id)

    return res.json(user)
})
.patch((req,res)=>{
    // To Edit a user with id
    return res.json({status:"pending"})
})
.delete((req,res)=>{
    // To Delete a user with id
    return res.json({status:"pending"})
})


// We have to use POSTMAN for POST, PATCH and DELETE request.
app.post("/api/users",(req,res)=>{
    // To Create a user
    const body= req.body
    users.push({...body,id:users.length + 1})
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        return res.json({status:"Success", id:users.length})
    })
})

app.listen(PORT,()=>console.log(`Server started on PORT ${PORT}`))

// By default browser allows GET request.
