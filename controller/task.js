const rootPath = require("..//util/path");
const path = require("path");
const Task = require("..//module/task");
const showTaskPage = (req, res) => {
    
  res.render(path.join(rootPath, "views", "task.ejs"));
};

const postTask = async (req, res, next) => {
  try {
    const task = await Task.create(req.body);

    task.save();

    return res.status(200).send(task);
  } catch (err) {
    return res.status(404).send("Bad Request");
  }
};

const getTask=async (req, res, next) => {
    try{
        const tasks=await Task.findAll()
        
        res.render(path.join(rootPath,'views','index.ejs'),{tasks:tasks})

    }
    catch (err) {
        return res.status(500).send("Bad Request")
    }
}
const singleTask=async (req,res)=>{
    try{
        const task=await Task.findByPk(req.params.id)
        return res.status(200).send(task)

    }
    catch (err) {
        return res.status(500).send("Bad Request")
    }
}
const deleteTask=async (req,res)=>{
    try{
        
        const task=await Task.findByPk(req.params.id)
        
        if(!task){
            return res.status(404).send("Task not found")
        }
        await task.destroy()
        return res.status(200).send("task successfully deleted")

    }
    catch (err) {
        
        return res.status(500).send("Bad Request")
    }
}
const updateTask=async (req,res)=>{
    try{
        const task=await Task.findByPk(req.params.id)
        if(!task){
            return res.status(404).send("Task not found")
        }
        task.title=req.body.title
        task.description=req.body.description
        task.description=task.description
        await task.save()
        return res.status(200).send(task)

    }
    catch (err) {
        return res.status(500).send("Bad Request")
    }
}

module.exports = { showTaskPage, postTask,getTask,singleTask,updateTask,deleteTask };
