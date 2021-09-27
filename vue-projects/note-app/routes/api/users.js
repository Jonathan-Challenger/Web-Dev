const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../../model/User');


/**
 * @route POST api/users/register
 * @desc Register user
 * @access Public
 */

router.post('/register', (req, res) => {
    const { name, email, password, confirm_password} = req.body
    let errors = [];

    // Check all fields are filled in
    if (!name || !email || !password|| !confirm_password) {
        errors.push({msg:'Please fill in all fields.'});
    }

    // Make sure passwords match
    if (password !== confirm_password) {
        errors.push({msg:'Passwords do not match.'});
    } 

    if (errors.length > 0) {
        res.send(errors);
    } else {
        // Validation passed
        User.findOne({email: email})
        .then(user => {
            // User exists
            if (user) {
                errors.push({msg:"This email is already registered."})
                res.send("Email already registered");
            } else {
                const newUser = new User({
                    name,
                    email,
                    password
                });

                // Hash password
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        // Set password to hashed pw
                        newUser.password = hash;
                        // Save user
                        newUser.save()
                            .then(user => {
                                return res.status(201).json({
                                    success: true,
                                    msg: 'User registered.'
                                });
                            })
                            .catch(err => console.log(err));
                    });
                });
            }
        });
    }
});


module.exports = router;