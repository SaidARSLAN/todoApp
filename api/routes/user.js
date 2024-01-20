const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = express.Router()

const {User} = require('../models/user')


router.get("/", async (req,res) => {

    
    res.send()
})


router.post("/", async (req,res) => {
    
    const hashedPassword = await bcrypt.hash(req.body.password,10)

    let user = new User({
        name : req.body.name,
        email : req.body.email,
        password : hashedPassword
    })

    await user.save()

    res.send(user)
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

    const token = jwt.sign({_id : user._id},'jwtPrivateKey')
    res.send(token)
})


module.exports = router