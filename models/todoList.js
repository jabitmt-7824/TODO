const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoListSchema = new Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    dueDate:{
         type:Date,
         required:true
    }
});

const TodoList = mongoose.model("TodoList",todoListSchema);

module.exports = TodoList;