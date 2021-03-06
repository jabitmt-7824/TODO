const TodoList = require("../models/todoList");

// view/render home page with added task details 
module.exports.home = function(req,res){
    TodoList.find({}, function(error,tasks){
        if(error)
        {
            console.log("error in getting data from database");
            return;
        }
        return res.render("home",{taskList:tasks});
    });
    
}

// add task to TODO List 
module.exports.addItem = function(req,res){
    TodoList.create({description: req.body.desc, category: req.body.category, dueDate: req.body.dueDate} , function(error,newtask){
        if(error)
        {
            console.log("error in adding new task");
            return;
        }
        return res.redirect("back");
    });
}

// delete tasks from TODO list 
module.exports.delItem = function(req, res) {

    TodoList.deleteMany({_id:{$in:req.body.id}}, function(error, todo) {
        if (error) {
          console.log("error in deleting tasks");
          return;
        } else {
          return res.redirect("/");
        }
      });
}