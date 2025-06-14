const express = require('express')
const User = require('../model/user_model.js')

async function handleGetAllUsers(req,res){  
    const allDbUsers = await User.find({}) // finding user from the database.
    // return res.json(allDbUsers)
    return res.render("home",{
        users:allDbUsers
    })
}

async function handleGetUserById(req,res){
    // Server Error Response (500 Status Code)
    // const user = users.find(user => user[0].id === id)
    const user = await User.findById(req.params.id)

    // Client Error Response 
    if(!user) return res.status(404).json({error:'User not found!...'})
    
    return res.json(user)
}

async function handleUpdateUserById(req,res){
    // To Edit a user with id

    await User.findByIdAndUpdate(req.params.id,{lastName:'Gorivale'}) // updating user information through id.
    return res.json({status:"Patch request resolved."})
} 

async function handleDeleteUserById(req,res){
    // To Delete a user with id

    await User.findByIdAndDelete(req.params.id) // deleting user information through id.
    return res.json({status:"User deleted."})
}

async function handleCreateNewUser(req,res){
    const body = req.body

    console.log(req.body)

    // To Create a user
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({msg:"All fields are required."})
    }

    const result = await User.create(
        {
            firstName: body.first_name,
            lastName: body.last_name,
            email: body.email,
            gender: body.gender,
            job_Title: body.job_title
        }
    )

    console.log("Result"+result)
    return res.status(201).json({msg:"Success",id:result._id} )
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}