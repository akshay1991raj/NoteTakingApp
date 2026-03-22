require('dotenv').config();
const express=require('express');
const app=express();

const cors= require('cors');
app.use(cors());

const session=require('express-session');
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 24 * 60 * 60 * 1000 // Set session to expire in 24 hours (in milliseconds)
        }
    })
);

const passport=require('./config/auth');
app.use(passport.initialize());
app.use(passport.session());

const morgan=require('morgan');
app.use(morgan('dev'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const apiRouter=require('./routes/apiRouter');
app.use('/api',apiRouter);

const authRouter=require('./routes/authRouter');
app.use('/auth',authRouter);

const adminRouter=require('./routes/admin/adminUserRouter');
app.use('/admin',adminRouter);

const errorhandler=require('errorhandler');
app.use(errorhandler());

module.exports={app};