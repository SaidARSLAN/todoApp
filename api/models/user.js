const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    name : {
        type : String,
        unique : true,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    }


}, {timeStamps : true})

const User = mongoose.model("User",userSchema)

module.exports = {User}