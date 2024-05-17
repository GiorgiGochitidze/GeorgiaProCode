const mongoose = require('mongoose')

// creating user schema to store data and define variable types
const User = new mongoose.Schema({
    userName: String,
    gmail: String,
    password: String,
    userType: String,
})

module.exports = mongoose.model('users', User)