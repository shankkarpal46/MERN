const express = require('express')
const fs = require('fs') // since file system is used to store data, instead of database .
const users = require('./MOCK_DATA.json')
const app = express()

const PORT = 8000

// GET /api/users - List all users
app.get("/api/users",(req,res)=>{
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


// GET /api/users/:id -> Dynamic id 
// app.get("/api/users/:id",(req,res)=>{
//     const id = Number(req.params.id)
    
//     const user = users.find(user => user.id === id)

//     return res.json(user)
// })


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


// Middleware used to extract data from the body, else it would be undefined. 
app.use(express.urlencoded({extended:false}))


// We have to use POSTMAN for POST, PATCH and DELETE request.
app.post("/api/users",(req,res)=>{
    // To Create a user
    const body= req.body
    users.push({...body,id:users.length + 1})
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        return res.json({status:"Success", id:users.length})
    })
})

app.patch("/api/users",(req,res)=>{
    // To Edit a user
    return res.json({status:"pending"})
})

app.delete("/api/users",(req,res)=>{
    // To Delete a user
    return res.json({status:"pending"})
})

app.listen(PORT,()=>console.log(`Server started on PORT ${PORT}`))

// By default browser allows GET request.
