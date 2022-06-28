import Joi from 'joi';

export const ProjectPortfolioSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    technologies: Joi.string().required(),
    url: Joi.string().required(),
    urlImg: Joi.string().required(),
}).options({
    abortEarly: false,
});