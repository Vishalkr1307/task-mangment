const jwt=require("jsonwebtoken")
require("dotenv").config()

const getToken=(user)=>{
    return jwt.sign({user},process.env.PRIVATE_KEY)

}
module.exports={getToken}