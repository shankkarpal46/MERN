const {nanoid} = require('nanoid')

const URL = require('../model/url_model.js')


async function handleGenerateNewShortURL(req,res){
    const shortID = nanoid(8)

    const body = req.body

    if(!body.url) return res.status(400).json({error:'url is required'})

    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitedHistory: []      
    })

    return res.render("home2",{id:shortID})
    // return res.json({id:shortID})
} 

async function handleGetAnalytics(req,res){
    const shortId = req.params.shortId

    const result = await URL.findOne({
        shortId
    })

    return res.json({totalClicks:result.visitedHistory.length,analytics:result.visitedHistory})
}

module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics
}