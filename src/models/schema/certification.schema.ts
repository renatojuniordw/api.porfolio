import Joi from 'joi';

export const CertificationSchema = Joi.object({
    code: Joi.string().required(),
    name: Joi.string().required(),
    nameInstitution: Joi.string().required(),
    year: Joi.string().required()
}).options({
    abortEarly: false,
});