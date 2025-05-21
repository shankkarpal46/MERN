const express = require('express')
const User = require('../model/user_model.js')


async function handleGetAllUsers(req,res){  
    const allDbUsers = await User.find({})
    const html = `
        <ul>
            ${allDbUsers.map(user=>`<li>${user.firstName} - ${user.email}</li>`).join("")} 
        </ul>
    ` 
    res.send(html)
    // res.render("home",{urls:allDbUsers}) //server side rendering.
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

        return res.redirect("/users")
    }
    
}

module.exports = {handleGetAllUsers,getUpload,uploadHandler}