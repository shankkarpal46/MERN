const express = require('express')
const multer = require('multer')
const router_html = express.Router()

let upload = multer({dest:'uploads/'})

const {
    handleGetAllUsers,
    getUpload,
    uploadHandler
    } = require('../controller/user_html_controller.js')


const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,'./uploads')
    },
    filename: function (req,file,cb){
        cb(null,`${Date.now()}-${file.originalname}`)
    }
})

upload = multer({storage:storage})


// GET /users - HTML Document Render 
router_html.route("/").get(handleGetAllUsers)

router_html.use(express.urlencoded({extended:false}))
// router_html.route("/getupload").get(getUpload)

router_html.use(express.static('uploads'))
router_html.route("/upload").get(getUpload).post(upload.single('profileimage'),uploadHandler)

// router_html.post('/upload', upload.single('profileimage'),uploadHandler)

module.exports = router_html