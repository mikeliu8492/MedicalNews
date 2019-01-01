const validator = require('validator');
const isEmpty = require('./isEmpty');

const validateRegister = (registerPayload) => {
    let errors = {}
    
    if(!registerPayload.firstName) {
        errors.firstName = "First name is missing";
    }

    if(!registerPayload.lastName) {
        errors.lastName = "Last name is missing";
    }

    if(!registerPayload.email) {
        errors.email = "Email is missing";
    }
    else {
        if(!validator.isEmail(registerPayload.email)) {
            errors.email = "Invalid email format; please try format you@email.com"
        }
    }
    
    if(!validator.isLength(registerPayload.password, {min: 6})) {
        errors.password = "Password must be at least 6 characters long";
    }

    return {
        errors: errors,
        isValid: isEmpty(errors)
    }
}

module.exports = validateRegister;