const express=require('express');
const app=express();

const cors= require('cors');
app.use(cors());

const morgan=require('morgan');
app.use(morgan('dev'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const apiRouter=require('./routes/apiRouter');
app.use('/api',apiRouter);

module.exports={app};