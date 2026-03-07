const express=require('express');
const app=express();

const cors= require('cors');
app.use(cors());

const morgan=require('morgan');
app.use(morgan('dev'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const userRouter=require('./routes/userRouter');
app.use('/user',userRouter);

module.exports={app};