const express = require('express')

const app = express()

const PORT = 8001

const url_router = require('./router/url_router.js')

const static_router = require('./router/static_router.js')

const URL  = require('./model/url_model.js')

const {connectToMongoDB} = require('./connect.js')

connectToMongoDB('mongodb://localhost:27017/shorturl').then(()=> console.log('Mongodb connected.'))

app.set("view engine","ejs")
app.set("views","./view")

app.use(express.json())
app.use("/url",url_router)
app.get("/:shortId",async(req,res)=>{
    const shortId = req.params.shortId

    const entry = await URL.findOneAndUpdate({
        shortId 
    },
    {
        $push:{
            visitedHistory:{
                timestamp:Date.now()
            }
        }
    })

    res.redirect(entry.redirectURL)
})

app.get("/url/test",(req,res)=>{
    return res.end(`<html>
            <head></<head>
            <body>
                <h1>Hello from the server.</h1>
            </body>
        </html>`)
})

app.get("/url/test2",async(req,res)=>{
    const allURLs = await URL.find({})
    return res.end(`<html>
        <head></head>
        <body>
            <ol>
                ${allURLs.map(url => `<li>${url.shortId} - ${url.redirectURL} - ${url.visitedHistory.length}</li>`).join('')}
            </ol>
        </body>
        </html>`)
})

app.get("/url/home",async(req,res)=>{
    const allURLs = await URL.find({})
    return res.render("home",{urls:allURLs})
})


app.use('/',static_router)

app.listen(PORT, ()=>console.log('Server started at '+PORT+'.'))


