const {body} = require("express-validator");


const validateUser=[
        body("first_name").trim().notEmpty().isLength({max:50}).withMessage("First name validation failed"),
        body("last_name").trim().notEmpty().isLength({max:50}).withMessage("Last name validation failed"),
        body("email").trim().notEmpty().isEmail().withMessage("Email validation failed").normalizeEmail(),
        body("password").trim().notEmpty().isLength({min:8}).withMessage("Password validation failed")
    ];

module.exports={validateUser};
