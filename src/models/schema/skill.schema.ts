import Joi from 'joi';

export const SkillSchema = Joi.object({
    name: Joi.string().required()
}).options({
    abortEarly: false,
});