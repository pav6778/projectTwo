var LocalStrategy = require('passport-local').Strategy;
var db = require('../models');
var bcrypt = require('bcryptjs');


module.exports = function(passport) {
    
    passport.use(
        new LocalStrategy({usernameField: 'email'}, (email, password, done)=> {
            db.User.findOne({ where: {email: email}})
            .then(user => {
                console.log(user)
                if(!user) {
                    return done(null, false, {message: 'That email is not registered'})
                }
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if(err) throw err;
                    
                    if(isMatch) {
                        return done(null, user)
                    } else {
                        return done(null, false, {message: 'Password incorrect'})
                    }
                });
            })
            .catch(err => console.log(err))
         }) 
     );

     passport.serializeUser(function(user, done){
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done){
        User.findById(id, function(err, user) {
          done(err, user);
        });
      });
}