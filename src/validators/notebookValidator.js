const {body}=require('express-validator');

const validateNotebook=[
    body('title').trim().notEmpty().isLength({max:50}).withMessage("title validation failed")
];

module.exports={validateNotebook};