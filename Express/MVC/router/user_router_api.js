const express = require('express')

const router_api = express.Router()

const {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
    } = require('../controller/user_controller.js')

// Middleware for POST method.
router_api.use(express.urlencoded({extended:false}))

// GET /api/users - List all users
router_api.route("/").get(handleGetAllUsers).post(handleCreateNewUser)

// routing the api having same URL.
router_api.route("/:id")
.get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById)

// Middleware used to extract data from the body, else it would be undefined. 


// We have to use POSTMAN for POST, PATCH and DELETE request.


module.exports = router_api