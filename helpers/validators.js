const { check, validationResult }   = require('express-validator');

/* CHECKERS */

// General
exports.id                  = check('id').matches("^[0-9a-fA-F]{24}$")
exports.objectId            = value => check( value, `${value} must be a valid ID` ).matches("^[0-9a-fA-F]{24}$")
exports.boolean             = value => check( value, `${value} must be boolean` ).isBoolean()

// User
exports.username            = check('username').isEmail()
exports.password            = check('password').isLength({ min: 5 })
exports.name                = check('name').isLength({ min: 2 })

/* Validation */
exports.validation = (req,res,next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    next()
}