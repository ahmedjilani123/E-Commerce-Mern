const Joi = require('joi');
const validator =(Schema)=>(payload)=>{
return Schema.validate(payload,{abortEarly:false});
}
const Schema = Joi.object({
    CatImage: Joi.string().required(),
    Category: Joi.string().lowercase().required(),
});
const SchemaValidatorC = validator(Schema);
module.exports ={
    SchemaValidatorC
}