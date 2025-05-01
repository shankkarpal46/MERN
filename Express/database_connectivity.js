const express = require('express')
const fs = require('fs') // since file system is used to store data, instead of database .

const mongoose = require('mongoose')
const app = express()

const PORT = 8000

// Connecting MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/dataconnect")
    .then(()=>console.log('MongoDB connected.'))
    .catch(err=>console.log('Mongo Error',err))

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required:true
    },

    lastName:{
        type: String
    },

    email:{
        type: String,
        required: true,
        unique: true
    },

    job_Title:{
        type: String
    },

    gender:{
        type: String
    },
    
},{timestamps:true})

const User = mongoose.model("user",userSchema)

// GET /api/users - List all users
app.get("/api/users", async (req,res)=>{
    const allDbUsers = await User.find({}) // finding user from the database.
    return res.json(allDbUsers)
})


// GET /users - HTML Document Render 
app.get("/users",async (req,res)=>{
    const allDbUsers = await User.find({})
    const html = `
        <ul>
            ${allDbUsers.map(user=>`<li>${user.firstName} - ${user.email}</li>`).join("")} 
        </ul>
    ` 
    res.send(html)
})

// routing the api having same URL.
app.route("/api/users/:id")
.get(async (req,res)=>{    
    // Server Error Response (500 Status Code)
    // const user = users.find(user => user[0].id === id)
    const user = await User.findById(req.params.id)

    // Client Error Response 
    if(!user) return res.status(404).json({error:'User not found!...'})
    
    return res.json(user)
})
.patch(async (req,res)=>{
    // To Edit a user with id

    await User.findByIdAndUpdate(req.params.id,{lastName:'Gorivale'}) // updating user information through id.
    return res.json({status:"Patch request resolved."})
})
.delete(async (req,res)=>{
    // To Delete a user with id

    await User.findByIdAndDelete(req.params.id) // deleting user information through id.
    return res.json({status:"User deleted."})
})


// Middleware used to extract data from the body, else it would be undefined. 
app.use(express.urlencoded({extended:false}))


// We have to use POSTMAN for POST, PATCH and DELETE request.
app.post("/api/users", async (req,res)=>{
    const body = req.body

    // To Create a user
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({msg:"All fields are required."})
    }

    const result = await User.create(
        {
            firstName: body.first_name,
            lastName: body.last_name,
            email: body.email,
            gender: body.gender,
            job_Title: body.job_title
        }
    )

    console.log("Result"+result)
    return res.status(201).json({msg:"Success"})
})

app.listen(PORT,()=>console.log(`Server started on PORT ${PORT}`))

// By default browser allows GET request.
