const express = require('express')

const app = express()

const PORT = 8001

const url_router = require('./router/url_router.js')

const URL  = require('./model/url_model.js')

const {connectToMongoDB} = require('./connect.js')

connectToMongoDB('mongodb://localhost:27017/shorturl').then(()=> console.log('Mongodb connected.'))

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

app.listen(PORT, ()=>console.log('Server started at '+PORT+'.'))


