import passport from 'passport';
import passportLocal from 'passport-local';
//import { Strategy as LocalStrategy} from 'passport-local';
import bcrypt from 'bcryptjs';
import User from './models/userModel.js';

const LocalStrategy = passportLocal.Strategy;

const Strategy = () => {

    passport.use("localstrategy", new LocalStrategy(/*{passReqToCallback:true},*/ (username, password, done) => {
        console.log("In LocalStrategy", username);
        User.findOne({ email: username }, (err, user) => {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect email address.' }); // null: no error, false: no user
            }
            bcrypt.compare(password, user.password, (err, isValid) => {
                if (err) { return done(err); }
                if (!isValid) { return done(null, false, { message: 'Incorrect password.' }); }
                return done(null, user);
            })
            // bcrypt.compare(password, user.password, (err, result) => {
            //     if (err) { return done(err); }
            //     if (result === true) { return done(null, user); }
            //     else return done(null, false, { message: 'Incorrect password.' });
            // })


        //   if (!user.validPassword(password)) {
        //     return done(null, false, { message: 'Incorrect password.' });
        //   }
        //   return done(null, user);
        });
    }));

    // Create session from user

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    // Takes session, unravels, and returns user

    passport.deserializeUser((id, done) => {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
};

export default Strategy;