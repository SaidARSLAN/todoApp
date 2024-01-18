const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const {Todo} = require('./models/todo')


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

app.get("/todos",(request,response) => {

    Todo.find({})
    .then(result => response.send(result))

})
app.post("/todos",(request,response) => {

    const todo = new Todo({
        id : request.body.id,
        title : request.body.title,
        description : request.body.description,
        isCompleted : request.body.isCompleted
    })

    todo.save()
    .then(result => response.send(result))
    .catch(err => console.log(err))

})
app.put('/todos/:id',(request,response) => {
    const id = request.params.id


    const todo = {
        title : request.body.title,
        description : request.body.description,
        isCompleted : request.body.isCompleted
    }

    const filter = {id : id}

    Todo.findOneAndUpdate(filter, todo)
    .then(result => response.send(result))
    .catch(err => console.log(err))



})

app.delete('/todos/:id',(request,response) => {

    const id = request.params.id

    Todo.deleteOne({id : id}).
    then(() => response.status(200).json({message : "The todo has been deleted"}))
    .catch(err => console.log(err))

})

app.listen(PORT_NUMBER, (req,res) => {

    console.log(`Todo Application Server Has Been Established ${PORT_NUMBER}`)

})