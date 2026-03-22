const {body}=require('express-validator');

const validateNotes=[
    body('title').trim().notEmpty().isLength({max:50}).withMessage("title validation failed"),
    body('content').trim().notEmpty().isLength({max:50}).withMessage("content validation failed")
];

module.exports={validateNotes};