const express = require('express')
const app = express()
const http = require('http')

app.get("/",(req,res)=>{
    return res.send("Home Page.")
})

app.get("/about",(req,res)=>{
    return res.send("About page, "+'Hey '+req.query.name)
})


const myServer = http.createServer(app)

myServer.listen(8000,()=>console.log("Server is started."))