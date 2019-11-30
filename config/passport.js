var LocalStrategy = require('passport-local').Strategy;
var db = require('../models');
var bcrypt = require('bcryptjs');


module.exports = function(passport) {
    
    passport.use(
        new LocalStrategy({usernameField: 'email'}, (email, password, done)=> {
            db.User.findOne({ where: {email: email}})
            .then(user => {
                if(!user) {
                    return done(null, false, {message: "This email does not exist in our database"})
                }
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if(err) throw err;
                    
                    if(isMatch) {
                        return done(null, user)
                    } else {
                        return done(null, false, {message: "Password incorrect"})
                    }
                });
            })
            .catch(err => console.log(err))
         }) 
     );

     passport.serializeUser(function(user, done) {
        done(null, user);
      });
      //
      passport.deserializeUser(function(obj, done) {
        done(null, obj);
      });
}