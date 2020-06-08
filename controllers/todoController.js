const TodoList = require("../models/todoList");
module.exports.home = function(req,res)
{
    TodoList.find({}, function(error,tasks){
        if(error)
        {
            console.log("error in getting data from database");
            return;
        }
        return res.render("home",{taskList:tasks});
    });
    
}

module.exports.addItem = function(req,res)
{
    console.log(req.body);
    console.log(req.body.dueDate);
    TodoList.create({description: req.body.desc, category: req.body.category, dueDate: req.body.dueDate} , function(error,newtask){
        if(error)
        {
            console.log("error in adding new task");
            return;
        }
        return res.redirect("back");
    });
}