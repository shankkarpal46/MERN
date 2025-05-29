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


app.use(express.urlencoded({extendend:false}))
app.use(express.json())
// routing the api having same URL.
app.route("/api/users/:id")
.get((req,res)=>{
    const id = Number(req.params.id)
    
    const user = users.find(user => user.id === id)

    return res.json(user)
})
.patch((req,res)=>{
    const id = Number(req.params.id);
    const updatedData = req.body;

    // Read current data from the file
    fs.readFile('./MOCK_DATA.json', 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ status: "error", message: "Failed to read data file" });
        }

        let user = JSON.parse(data);

        const userIndex = user.findIndex(u => u.id === id);

        if (userIndex === -1) {
            return res.status(404).json({ status: "error", message: "User not found" });
        }

        // Only update the fields provided in the request
        user[userIndex] = { ...user[userIndex], ...updatedData };

        // Write updated data back to the file
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(user, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ status: "error", message: "Failed to write to data file" });
            }

            return res.json({ status: "success", user: user[userIndex] });
        });
    });
})
.delete((req,res)=>{
    // To Delete a user with id
    const id = Number(req.params.id);

    fs.readFile('./MOCK_DATA.json', 'utf-8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return res.status(500).json({ status: "error", message: "Failed to read data file" });
        }

        let user = JSON.parse(data);
        const userIndex = users.findIndex(u => u.id === id);

        if (userIndex === -1) {
            return res.status(404).json({ status: "error", message: "User not found" });
        }

        // Remove the user
        user.splice(userIndex, 1);

        // Write the updated array back to file
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(user, null, 2), (err) => {
            if (err) {
                console.error("Error writing file:", err);
                return res.status(500).json({ status: "error", message: "Failed to write to file" });
            }

            return res.json({ status: "success", message: `User with ID ${id} deleted.` });
        });
    });
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

app.listen(PORT,()=>console.log(`Server started on PORT ${PORT}`))

// By default browser allows GET request.
