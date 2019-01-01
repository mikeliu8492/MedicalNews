// User Routes

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

// Import User Model
const User = require('../models/User');

// Import validators
const validateLogin = require('../validation/validateLogin');
const validateRegister = require('../validation/validateRegister');

// TODO:  Implement security middleware for production mode.
router.get("/", async (req,res,next) => {
    try {
        const users = await User.find();
        return res.status(200).json({users: users});
    }
    catch(err) {
        return res.status(500).json({message: err.toString()});
    }

})

router.get("/:_id", async (req,res,next) => {
    try {
        const user = await User.findById(req.param._id);
        if(!user) {
            return res.status(404).json({message: "No such user exists"});
        }
        return res.status(200).json({user: user});
    }
    catch(err) {
        return res.status(500).json({message: err.toString()});
    }
})

router.post("/login", async (req,res,next) => {
    let errors = {}
    try {
        
        const validationResult = validateLogin(req.body);
        errors = validationResult.errors;
        const isValid = validationResult.isValid;

        if (!isValid) {
            return res.status(400).json({message: "Please see validation errors", errors: errors});
        }

        const user = await User.findOne({email: req.body.email});
        
        if(!user) {
            const message = "No Such User Exists";
            errors.email = message
            return res.status(400).json({message: message, errors: errors});
        }

        const validPassword = bcrypt.compareSync(req.body.password, user.password);
        if(!validPassword) {
            const message = "Wrong Password. Please try again.";
            errors.password = message
            return res.status(400).json({message: message, errors: errors});
        }

        const expiration = Math.floor(Date.now() / 1000) + (60 * 60)
        
        const token = jwt.sign({
                exp: expiration,
                reset: false,
                id: user._id
            }, 
            config.jwtSecret
        );

        return res.status(200).json({token: token, userData: {
            exp: expiration,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
        }});
    }
    catch(err) {
        return res.status(500).json({message: err.toString(), errors: errors});
    }
})   


router.post("/register", async (req,res,next) => {
    let errors = {}

    const validationResult = validateRegister(req.body);
    errors = validationResult.errors;
    const isValid = validationResult.isValid;

    if (!isValid) {
        return res.status(200).json({message: "Please see validation errors", errors: errors});
    }

    try {
        const existingUser = await User.findOne({email: req.body.email});
        
        if(existingUser) {
            return res.status(200).json({message: "User Email Already Exists", error: {email: "User Email Already Exists"}});
        }

        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hashSync(req.body.password,salt);
        req.body.password = password;
        const user = await User.create(req.body);

        // TODO:  Automatically give back the token and refactor token creation to seperate function.
        return res.status(201).json({message: "New user created", user: user});
    }
    catch(err) {
        return res.status(500).json({message: err.toString()});
    }
    
})

router.put("/", (req,res,next) => {
    return res.status(200).json({message: "put from users"});
})

router.delete("/:id", async (req,res,next) => {
    try {
        const user = await User.findById(req.param._id);
        if(!user) {
            return res.status(404).json({message: "No such user exists"});
        }

        const result = await User.deleteOne({_id: user._id});
        return res.status(200).json({message: `User ${result._id} deleted!`});
    }
    catch(err) {
        return res.status(500).json({message: err.toString()});
    }
})


module.exports = router;