var LocalStrategy = require('passport-local').Strategy;
var db = require('../models');
var bcrypt = require('bcryptjs');


module.exports = function(passport) {
    
    passport.use(
        new LocalStrategy({usernameField: 'email'}, (email, password, done)=> {
            db.User.findOne({ where: {email: email}})
            .then(user => {
                if(!user) {
                    console.log("This email does not exist in our database");
                    
                    return done(null, false, {message: "This email does not exist in our database"})
                }
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if(err) throw err;
                    
                    if(isMatch) {
                        console.log("password is correct?");
                        
                        return done(null, user)
                    } else {
                        console.log("Password incorrect");
                        
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