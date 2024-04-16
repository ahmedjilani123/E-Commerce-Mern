const Joi = require('joi');
const validator =(Schema)=>(payload)=>{
return Schema.validate(payload,{abortEarly:false});
}
const Schema = Joi.object({
    FirstName: Joi.string().lowercase().required(),
    LastName: Joi.string().lowercase(),
    Email: Joi.string().email().lowercase().required(),
    Contact: Joi.number().integer(),
    Password: Joi.string().pattern(new RegExp('^[A-Z]{2}[a-z]{2}[&*^%$!~@]{1}[0-9]{3}$')).required(),
    ConfirmPassword:Joi.ref('Password')
});
const SchemaValidatorR = validator(Schema);
module.exports ={
    SchemaValidatorR
}