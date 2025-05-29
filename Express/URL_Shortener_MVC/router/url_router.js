const express = require('express')

const url_router = express.Router()

const {
    handleGenerateNewShortURL,
    handleGetAnalytics   
    } = require('../controller/url_controller.js')

url_router.post('/',handleGenerateNewShortURL)

url_router.get("/analytics/:shortId",handleGetAnalytics)

module.exports = url_router
