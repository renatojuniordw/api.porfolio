import Joi from 'joi';

export const AdditionalInformationSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required()
}).options({
    abortEarly: false,
});