import passport from "passport";
import { GOOGLE_CLIENT_ID , GOOGLE_CLIENT_SECRET } from "./config.js";

import {Strategy as GoogleStrategy } from 'passport-google-oauth20';


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },

  function(accessToken, refreshToken, profile, cb , done) {
    done(null , profile)
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
  }
)); 

passport.serializeUser( (user , done) => {
    done(null , user)

    // User.findById(id, function(err, user) {
    //   done(err, user);
    // });
})

passport.deserializeUser( (user , done) => {
    done(null , user)
})

const passportSetup = passport;
export default passportSetup;