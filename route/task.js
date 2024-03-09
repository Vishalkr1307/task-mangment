const express=require("express")
const router=express.Router()
const {showTaskPage,postTask,getTask,singleTask,updateTask,deleteTask}=require("..//controller/task")

router.get("",showTaskPage)
router.post("/addTask",postTask)
router.get("/getTask",getTask)
router.get("/getTask/:id",singleTask)
router.put("/updateTask/:id",updateTask)
router.delete("/delete/Task/:id",updateTask)

module.exports=router