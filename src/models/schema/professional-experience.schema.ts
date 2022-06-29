import Joi from 'joi';

export const ProfessionalExperienceSchema = Joi.object({
    nameCompany: Joi.string().required(),
    startDate: Joi.date().required(),
    endDate: Joi.optional(),
    office: Joi.string().required(),
    description: Joi.string().required(),
    id: Joi.string().optional()
}).options({
    abortEarly: false,
});