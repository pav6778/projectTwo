// var localStrategy = require('passport-local').Strategy;
// var db = require('../models')

// module.exports = function(passport) {
//      passport.use(
//          new.localStrategy({usernameField: 'email'}, (email, password, done)=> {
//             db.User.findOne({ where: {
//                 email: email}
//             }).then(user => {
//                 if(!user) {
//                     return done(null, false, {message: 'That email is not registered'})
//                 }

//             })
//             .catch(err => console.log(err))
//          }) 
//      )
// }