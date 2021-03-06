 const express = require('express');
 const app = express();
 const bodyParser= require('body-parser');
 const PORT=4000;
 const cors=require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const studentRoute=require('./student.route');
mongoose.Promise=global.Promise;
mongoose.connect(config.DB,{useNewUrlParser: true}).then(
  ()=>{console.log('DB connected..!');},
  err=>{console.log('cannot connect to the DB..!'+err);}
);
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/student',studentRoute);

app.listen(PORT, function(){
 console.log('Server is running on Port:',PORT);
});
