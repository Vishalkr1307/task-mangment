const rootPath=require("..//util/path")
const path=require("path")
const User=require("..//module/user")
const bcrypt=require("bcrypt")
// const { use } = require("../route/user")
const {getToken}=require("..//util/token")

const showLoginPage=(req,res)=>{
    res.render(path.join(rootPath,'views','login.ejs'))
}
const showRegisterPage=(req,res)=>{
    res.render(path.join(rootPath,'views','register.ejs'))
}
const postRegisterPage=async (req,res)=>{
    let user=await User.findOne({where:{email:req.body.email}})
    
    if(user){
        return res.status(400).send("User already registered")
    }
     user=await User.create(req.body)
     user.save()
     console.log(user.email,user.password)
    
    return res.status(200).send(user)

}
const postLoginPage=async (req,res)=>{
    console.log(req.body.email)
    let user=await User.findOne({where:{email:req.body.email}})
    console.log(user)
    
    if(!user){
        return res.status(400).send("User are not registered")
    }
    const machPassword =await bcrypt.compareSync(req.body.password,user.password)
    if(!machPassword){
        return res.status(400).send("password is incorrect")
    }
    const token=getToken(user)
     
    
    return res.status(200).send({user,token})

}

module.exports ={showLoginPage,showRegisterPage,postRegisterPage,postLoginPage}