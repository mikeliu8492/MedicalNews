const validator = require('validator');
const isEmpty = require('./isEmpty');

const validateLogin = (loginPayload) => {
    let errors = {}
    
    if(!loginPayload.email) {
        errors.email = "Email is missing";
    }
    else {
        if(!validator.isEmail(loginPayload.email)) {
            errors.email = "Invalid email format.  Please try format you@email.com"
        }
    }
    
    if(!loginPayload.password) {
        errors.password = "Password is missing.";
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}

module.exports = validateLogin;
