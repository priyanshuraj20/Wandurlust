const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(), // string & required
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().required().min(0), // number, required, non-negative
    image: Joi.string().allow("", null), // optional image, empty or null allowed
  }).required(), // ensures 'listing' object itself is required in body
});
module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required(),
});
