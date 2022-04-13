const Sequelize=require('sequelize');
const sequelize=require('../database/connection');
const User=sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    c_name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    c_duration:{
        type:Sequelize.STRING,
        allowNull:false
    },
    c_fees:{
      type:Sequelize.INTEGER,
      allowNull:false
    },
    status:{
      type:Sequelize.STRING,
      allowNull:false
    }
});
module.exports=User;