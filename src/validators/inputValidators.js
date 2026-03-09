const {body,param,query} = require("express-validator");

const validateMultipleInputsInBody=(...fields)=>{
    return fields.map(field=>validateInputInBody(field));
}

const validateMultipleInputsInURLParameters=(...fields)=>{
    return fields.map(field=>validateInputInURLParameters(field));
}

const validateMultipleInputsInQueryString=(...fields)=>{
    return fields.map(field=>validateInputInQueryString(field));
}

const validateInputInBody=(field)=>{
    return body(field).trim().matches(/^[a-zA-Z0-9]+$/).withMessage(`Input validation failed on ${field} field`);
}

const validateInputInURLParameters=(field)=>{
    return param(field).trim().matches(/^[a-zA-Z0-9]+$/).withMessage(`Input validation failed on ${field} field`);
}

const validateInputInQueryString=(field)=>{
    return query(field).trim().matches(/^[a-zA-Z0-9]+$/).withMessage(`Input validation failed on ${field} field`);
}

module.exports={validateMultipleInputsInBody,validateMultipleInputsInURLParameters,validateMultipleInputsInQueryString}
