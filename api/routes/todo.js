const express = require('express')

const router = express.Router()
const {Todo} = require('../models/todo')


router.get("/todos",(request,response) => {

    Todo.find({})
    .then(result => response.send(result))

})

router.post("/todos",(request,response) => {

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
router.put('/todos/:id',(request,response) => {
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

router.delete('/todos/:id',(request,response) => {

    const id = request.params.id

    Todo.deleteOne({id : id}).
    then(() => response.status(200).json({message : "The todo has been deleted"}))
    .catch(err => console.log(err))

})

module.exports = router;