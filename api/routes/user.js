const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = express.Router()

const {User} = require('../models/user')



router.post("/create", async (req,res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password,10)

        let user = new User({
            name : req.body.name,
            email : req.body.email,
            password : hashedPassword
        })
    
        await user.save()
        res.send(user);
    }
    catch (err) {
        console.log(err)
    }
})

router.post("/auth", async (req,res) => {

    let user = await User.findOne({email : req.body.email})

    if (!user) {
        return res.status(400).send("hatalı email ya da parola!")
    }

    const isSuccess = await bcrypt.compare(req.body.password, user.password)

    if (!isSuccess) {
        return res.status(400).send("hatalı email ya da parola!")
    }


    // If everything is working well then create token and send to client!
    // _id data which I want to keep in our token
    const token = jwt.sign(
        {
            _id : user._id,
            isAdmin : user.isAdmin
        },
        'jwtPrivateKey'
        
        )
    res.header("x-auth-token",token).send(token)
})



module.exports = router