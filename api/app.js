const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const todo = require('./routes/todo')
const user = require('./routes/user')
const PORT_NUMBER = 3434

const username = "admin"
const password = "roottoor"
const ip = "localhost"
const db_port = "27017"
const database = "admin"

const URL = `mongodb://${username}:${password}@${ip}:${db_port}/?authSource=${database}`

const app = express()

app.use(express.json())

// app.use((req,res,next) => {
//     res.setHeader("Access-Control-Allow-Origin","*"),
//     res.setHeader("Access-Control-Allow-Methods","*")
//     next()
// })


app.use(cors())
mongoose.connect(URL)
.then(() => console.log("Mongodb server has been established!"))
.catch(err => console.log("Database error:",err))

app.use('/',todo)
app.use('/user',user)

app.listen(PORT_NUMBER, (req,res) => {

    console.log(`Todo Application Server Has Been Established ${PORT_NUMBER}`)

})