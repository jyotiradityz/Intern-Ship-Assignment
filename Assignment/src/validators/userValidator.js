const Joi = require('joi');

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  age: Joi.number().required(),
  city: Joi.string().required(),
  zipCode: Joi.string().required(),
});

const idSchema = Joi.object({
  userId: Joi.string().hex().length(24).required(),
});

const validateUser = (user) => {
  return userSchema.validate(user);
};

const validateUserId = (params) => {
  return idSchema.validate(params);
};

module.exports = {
  validateUser,
  validateUserId,
};