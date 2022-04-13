const Sequelize=require('sequelize');
const sequelize=new Sequelize('crud','root','Abhijit2021@swain',{
    dialect:"mysql",
    host:'localhost'
});

module.exports=sequelize;