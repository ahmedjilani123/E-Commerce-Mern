const Joi = require('joi');
const validator =(Schema)=>(payload)=>{
return Schema.validate(payload,{abortEarly:false});
}
const Schema = Joi.object({
    ProductName: Joi.string().lowercase().required(),
    ProductImage: Joi.string(),
    ProductDescription: Joi.string(),
    Price: Joi.number().integer().required(),
    Category: Joi.string().required()
});
const SchemaValidatorP = validator(Schema);
module.exports ={
    SchemaValidatorP
}