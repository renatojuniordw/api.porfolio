import Joi from 'joi';

export const FormationSchema = Joi.object({
    course: Joi.string().required(),
    nameInstitution: Joi.string().required(),
    startDate: Joi.date().required(),
    endDate: Joi.optional(),
}).options({
    abortEarly: false,
});