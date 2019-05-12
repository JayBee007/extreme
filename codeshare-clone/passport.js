var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var User = require("./models/user");

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findOne({ _id: id }, function(err, user) {
    done(err, user);
  });
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "email"
    },
    function(username, password, done) {
      User.findOne({ email: username }, function(err, user) {
        if (err) return done(err);
        if (!user) {
          return done(null, false, {
            message: "Incorrect username or password"
          });
        }
        if (!user.validatePassword(password)) {
          return done(null, false, {
            message: "Incorrect username or password"
          });
        }
        return done(null,user)
      });
    }
  )
);
