const {Sequelize}=require("sequelize")
const data=new Sequelize("expense-tracker","root","Vishal@1307",{
    host:"localhost",
    dialect:"mysql"
})

module.exports=data