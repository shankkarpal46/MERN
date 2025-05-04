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

module.exports = {handleGetAllUsers}