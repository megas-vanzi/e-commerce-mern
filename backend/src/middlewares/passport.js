var passport = require("passport");
var GitHubStrategy = require("passport-github2").Strategy;

var User = require("../models/users");
var config = require("../_config");
var init = require("./init");

passport.use(
  new GitHubStrategy(
    {
      clientID: config.github.clientID,
      clientSecret: config.github.clientSecret,
      callbackURL: config.github.callbackURL,
    },
    function (accessToken, refreshToken, profile, done) {
      var searchQuery = {
        name: profile.displayName,
      };

      var updates = {
        name: profile.displayName,
        someID: profile.id,
      };

      var options = {
        upsert: true,
      };

      // update the user if s/he exists or add a new user
      User.findOneAndUpdate(
        searchQuery,
        updates,
        options,
        function (err, user) {
          if (err) {
            return done(err);
          } else {
            return done(null, user);
          }
        }
      );
    }
  )
);

// serialize user into the session
init();

var GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://www.example.com/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);

module.exports = passport;
