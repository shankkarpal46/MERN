const express = require('express')

const router = express.Router()

const URL = require('../model/url_model.js')

router.get('/',async (req,res)=>{
    const allURLs = await URL.find({})
    res.render('home2',{
        urls: allURLs
    })
})
module.exports = router

