const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({

    id : Number,
    title : String,
    description : String,
    isCompleted : Boolean,

})

const Todo = mongoose.model("Todo",todoSchema)

module.exports = {Todo}