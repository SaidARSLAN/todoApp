const express = require('express')
const mongoose = require('mongoose')
const PORT_NUMBER = 3434

const username = "admin"
const password = "roottoor"
const ip = "localhost"
const db_port = "27017"
const database = "admin"

const URL = `mongodb://${username}:${password}@${ip}:${db_port}/?authSource=${database}`

const app = express()

app.use(express.json)
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","*"),
    res.setHeader("Access-Control-Allow-Methods","*")
    next()
})

mongoose.connect(URL)
.then(() => console.log("Mongodb server has been established!"))
.catch(err => console.log("Database error:",err))

app.get("/todos",(request,response) => {

    response.send("Todos are showing...")

})


app.listen(PORT_NUMBER, (req,res) => {

    console.log(`Todo Application Server Has Been Established ${PORT_NUMBER}`)

})