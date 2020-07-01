// require passport 
const passport = require('passport');

const TwitterStrategy = require('passport-twitter');

passport.use(new TwitterStrategy(
    {
        consumerKey: 'RDCmUQIkIJMCCIzChFRTkEIch',
        consumerSecret: 'umolAhI2SJ9ZAPpzzEoBafJdzPQe4Bln9X2sy6I7AQlSxHH4wk',
        callbackURL: 'http://localhost:3000/twitter/callback'
    },
    function(token, tokenSecret, profile, cb) {
        return cb(null, profile);
    })
);

passport.serializeUser(function(user, cb) {
    cb(null, user);
  });
  
passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });



module.exports = passport;