const Joi = require('joi');
const validator =(Schema)=>(payload)=>{
return Schema.validate(payload,{abortEarly:false});
}
const Schema = Joi.object({
    CatImage: Joi.string().lowercase().required(),
    Category: Joi.string().required(),
});
const SchemaValidatorC = validator(Schema);
module.exports ={
    SchemaValidatorC
}