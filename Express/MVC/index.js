const express = require('express')
const path = require('path')
const {connectMongoDB} = require('./connection.js')
const {logReqRes} = require('./middlewares/logReqRes.js')
const userRouter_api = require('./router/user_router_api.js')
const userRouter_html = require('./router/user_router_html.js')
const app = express()

const PORT = 8000

connectMongoDB("mongodb://127.0.0.1:27017/dataconnect")

app.set("view engine","ejs")

app.set('views',path.resolve("./MVC/view"))

app.use(logReqRes("log.txt"))

app.use("/users",userRouter_html)

app.use("/api/users",userRouter_api)

app.listen(PORT,()=>console.log(`Server started on PORT ${PORT}`))

// By default browser allows GET request.
