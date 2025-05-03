const express = require('express')

const router_html = express.Router()

const {handleGetAllUsers} = require('../controller/user_html_controller.js')

// GET /users - HTML Document Render 
router_html.route("/").get(handleGetAllUsers)

module.exports = router_html