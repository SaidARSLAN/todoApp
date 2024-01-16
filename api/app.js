const express = require('express')
const PORT_NUMBER = 3434
const app = express()


app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","*"),
    res.setHeader("Access-Control-Allow-Methods","*")
    next()
})


app.get("/todos",(request,response) => {

    response.send("Todos are showing...")

})


app.listen(PORT_NUMBER, (req,res) => {

    console.log(`Todo Application Server Has Been Established ${PORT_NUMBER}`)

})