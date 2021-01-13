/**
 * With joi you first construct a schema using the provided types and constraints.
 * 
 * Joi schema objects are immutable meaning every additional rule added will return a new schema object.
 * For example, min(5) will returna new schema object.
 */


const Joi = require('joi');

const schema = Joi.object({

    // A required string.
    username: Joi.string()
    // Must only contain alphanumeric characters.
    .alphanum()
    // At least 3 characters.
    .min(3)
    // No more than 20 characters.
    .max(20)
    .required(),

    // An optional string that must satisfy the regex pattern.
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    // Must be equal to password.
    repeat_password: Joi.ref('password'),

    birth_year: Joi.number()
    .integer()
    .min(1900)
    .max(2013),

    // Must have 2 domain parts (example.com) and allowed top level domains are com and net.
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net']}})

})

// username must be accompanied by birth_year.
.with('username', 'birth_year')
// password cannot appear with access token. One of them is required but not at the same time.
.xor('password', 'access_token')
// password must be accompanied by repeat_password.
.with('password', 'repeat_password');

/**
 * A value is validated against defined schemas.
 * If the input is valid then the error will be undefined.
 * If the input is invalid, error is assigned a ValidationError object providing more information.
 */

const { error, value } = schema.validate({username: 'tom123', birth_year: '1995'});

console.error("ERROR: \n" + error);
console.log(value);

// Error because username is required.
schema.validate({});