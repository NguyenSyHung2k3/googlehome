const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-models');

passport.use(
    new GoogleStrategy({
        // options for the google stat
        clientID: keys.google.clientSecret,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        console.log('passport callback function fired');
        console.log(profile); // Print out the profile from google account

        // Check if user already available

        User.findOne({googleId: profile.id}).then((currentUser) => {
            if(currentUser){
                // already have user
                console.log('user is: '+currentUser);
            } else {
                // save user in database
                new User({

                }).save().then((newUser) => {
                    console.log('new user created: '+newUser)
                })
            }
        })

    }
))