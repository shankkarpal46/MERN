const mongoose = require('mongoose')

async function connectMongoDB(url){
    return mongoose.connect(url)
}
// Connecting MongoDB

module.exports = {connectMongoDB}