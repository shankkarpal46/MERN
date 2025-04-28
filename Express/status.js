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

// routing the api having same URL.
app.route("/api/users/:id")
.get((req,res)=>{
    const id = Number(req.params.id)
    
    // Server Error Response (500 Status Code)
    // const user = users.find(user => user[0].id === id)
    const user = users.find(user => user.id === id)

    // Client Error Response 
    if(!user) return res.status(404).json({error:'User not found!...'})
    
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
        if (err) {
            // Server Error Response
            return res.status(500).json({ status: "Error", message: "Failed to write file" });
        }
        else if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
            // Client Error Response
            return res.status(400).json({msg:'All fields are required....'})

        }
        else{
            // Successful Response
            return res.status(201).json({status:"Success", id:users.length})
        }
        
    })
})

app.listen(PORT,()=>console.log(`Server started on PORT ${PORT}`))

// By default browser allows GET request.
