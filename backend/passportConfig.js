import passport from 'passport';
import passportlocal from 'passport-local';
import bcrypt from 'bcryptjs';
import User from './models/userModel.js';

const localStrategy = passportlocal.Strategy;

passport.use(new localStrategy((email, password, done) => {
    User.findOne({ email: email }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect email address.' }); // null: no error, false: no user
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
}));

// Create cookie from user

passport.deserializeUser((user, done) => {
    done(null, user.id);
});

// Takes cookie, unravels, and returns user

passport.deserializeUser((id, done) => {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});