import Joi from 'joi';

export const ProfessionalExperienceSchema = Joi.object({
    nameCompany: Joi.string().required(),
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),
    office: Joi.string().required(),
    description: Joi.string().required(),
}).options({
    abortEarly: false,
});