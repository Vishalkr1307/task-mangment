const express=require("express")
const app = express()
const path = require("path")
const db=require("./config/db")
const rootPath=require("./util/path")
const User=require("./route/user")
const Task=require("./route/task")
const TaskData=require("./module/task")
require("dotenv").config()
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
app.set("view engine", "views")
app.set("views",'ejs')

app.use("/auth",User)
app.use("/task",Task)


const port=process.env.PORT ||8000

app.get("/",async(req,res)=>{
    const tasks=await TaskData.findAll()
    res.render(path.join(rootPath,'views','index.ejs'),{tasks:tasks});
})

db.sync().then((res)=>{
    
    console.log("database connection established");
    app.listen(port,()=>{
        console.log(`listening on ${port}`)
    })

}).catch((err)=>{
    console.log(err);

})



