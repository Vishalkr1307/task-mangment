const express=require("express")
const router=express.Router()
const rootPath=require("..//util/path")
const {showLoginPage,showRegisterPage,postRegisterPage,postLoginPage}=require("..//controller/user")
router.get("/login",showLoginPage)
router.get("/register",showRegisterPage)
router.post("/register",postRegisterPage)
router.post("/login",postLoginPage)


module.exports=router