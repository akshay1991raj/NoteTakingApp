const {body} = require("express-validator");


const validateUser=[
        body("name").trim().notEmpty().isLength({max:50}).withMessage("Name validation failed"),
        body("email").trim().notEmpty().isEmail().withMessage("Email validation failed").normalizeEmail(),
        body("password").trim().notEmpty().isLength({min:8}).withMessage("Password validation failed")
    ];

module.exports={validateUser}
