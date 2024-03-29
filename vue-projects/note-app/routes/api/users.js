const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../../config/keys').secret;
const User = require('../../model/User');

/**
 * @route GET api/users
 * @desc Get users
 * @access Public
 */

router.get('/', async (req, res) => {
    const users = await loadUsers();
    res.send(await users.find({}).toArray());
});


const db = require('../../config/keys').MongoURI;

async function loadUsers() {
    const client = await mongodb.MongoClient.connect(db, {
        useNewUrlParser: true
    });
    return client.db('note_app').collection('users');
}


/**
 * @route POST api/users/register
 * @desc Register user
 * @access Public
 */

router.post('/register', (req, res) => {
    const { name, email, password, confirm_password} = req.body
    let errors = [];

    // Check all fields are filled in
    if (!name.trim() || !email.trim() || !password|| !confirm_password) {
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
                res.send(errors);
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


/**
 * @route POST api/users/login
 * @desc Login user
 * @access Public
 */

router.post('/login', (req, res) => {
    let errors = [];

    User.findOne({email: req.body.email})
        .then(user => {
            if (!user) {
                /* return res.status(404).json({
                    msg: 'User not found.',
                    success: false
                }); */
                errors.push("No account registered with this email.")
            }
            // If user exists compare password
            bcrypt.compare(req.body.password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        // User correct
                        const payload = {
                            _id: user._id,
                            name: user.name,
                            email: user.email
                        }
                        jwt.sign(payload, key, { expiresIn: 604800}, (err, token) => {
                            res.status(200).json({
                                success:true,
                                user: user,
                                token: `Bearer ${token}`,
                                msg: 'You are now logged in.'
                            });
                        })
                    } else {
                        /* return res.status(404).json({
                            msg: 'Incorrect password.',
                            success: false
                        }); */
                        errors.push("Incorrect password");
                        res.send(errors);
                    }
                })
        });
})


/**
 * @route GET api/users/profile
 * @desc Return the User's Data
 * @access Private
 */

router.get('/profile', passport.authenticate('jwt', {
    session: false
}), (req,res) => {
    return res.json({
        user: req.user
    });
});


module.exports = router;