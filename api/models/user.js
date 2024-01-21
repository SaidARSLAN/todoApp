const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({

    name : {
        type : String,
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
    },
    isAdmin : Boolean


}, {timeStamps : true})

userSchema.methods.createToken = () => {
    console.log(this)
    const token = jwt.sign({
        _id : this._id,
        isAdmin : this.isAdmin        
    }, 'jwtPrivateKey')

    return token
}

const User = mongoose.model("User",userSchema)



module.exports = {User}