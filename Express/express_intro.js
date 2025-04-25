const express = require('express')
const app = express()


app.get("/",(req,res)=>{
    return res.send("Home Page.")
})

app.get("/about",(req,res)=>{
    return res.send("About page, "+'Hey '+req.query.name)
})

// const myServer = http.createServer(app)

app.listen(8000,()=>console.log("Server is started."))