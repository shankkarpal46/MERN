const express = require('express')
const User = require('../model/user_model.js')
const multer = require('multer')

async function handleGetAllUsers(req,res){  
    const allDbUsers = await User.find({})
    const html = `
        <ul>
            ${allDbUsers.map(user=>`<li>${user.firstName} - ${user.email}</li>`).join("")} 
        </ul>
    ` 
    // res.send(html)
    res.render("home",{users:allDbUsers}) //server side rendering.
}


async function getUpload(req,res){
    return res.render("image_upload")
}

async function uploadHandler(req,res){
    if (!req.file) {
        return res.status(400).send("No file uploaded or invalid file type.");
    }
    else{
        console.log(req.body)
        console.log(req.file)

        let {firstName,lastName,email,job_Title,gender} = req.body 
        
        // const image_path = "uploads/"+req.file.originalname

        let profileimage = req.file.originalname

        await User.create({
            firstName,lastName,email,profileimage,job_Title,gender
        })

        User.find().then(users => console.log(users));

        return res.redirect("/users")
    }
}

module.exports = {handleGetAllUsers,getUpload,uploadHandler}