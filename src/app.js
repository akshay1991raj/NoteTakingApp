const express=require('express');
const app=express();

const cors= require('cors');
app.use(cors());

const morgan=require('morgan');
app.use(morgan('dev'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const apiRouter=require('./routes/apiRouter');
app.use('/api',apiRouter);

const errorhandler=require('errorhandler');
app.use(errorhandler());

module.exports={app};