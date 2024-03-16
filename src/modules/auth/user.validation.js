import Joi from "joi";

export const registerSchema = Joi.object({
    name:Joi.string().min(2).max(20).required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(12).required(),
    cPassword:Joi.valid(Joi.ref('password')),
});