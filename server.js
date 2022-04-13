const express=require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const bodyparser=require('body-parser');
const path=require('path');
//import connections
const sequelize=require('./server/database/connection');
const User=require('./server/model/model');



const app=express();

dotenv.config({path:'config.env'});
const port=process.env.port;
//log request
app.use(morgan('tiny'));

//connection db
sequelize.sync();

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}));

//set view engine / template engine.
app.set('view engine','ejs');
//app.set('views',path.resolve(__dirname,'views/ejs'))

app.use('/connection',express.static(path.resolve(__dirname,'server/database')));
// load assets.
app.use('/css',express.static(path.resolve(__dirname,'assets/css')));
app.use('/img',express.static(path.resolve(__dirname,'assets/img')));
app.use('/js',express.static(path.resolve(__dirname,'assets/js')));

//load Routers
app.use('/',require('./server/routes/router'));

app.listen(port,()=>{
    console.log(`The crud_app run in th port: ${port}`);
})