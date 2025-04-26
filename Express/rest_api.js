const express = require('express')
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
app.get("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id)
    
    const user = users.find(user => user.id === id)

    return res.json(user)
})

app.listen(PORT,()=>console.log(`Server started on PORT 8000`))

// By default browser allows GET request.