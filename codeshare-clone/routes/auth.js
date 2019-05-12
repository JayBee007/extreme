var express = require("express");
var router = express.Router();
var passport = require("passport");

var User = require('../models/user');

router.route("/login")
  .get(function(req, res, next) {
    res.render("login", { title: "Login into your account" });
  })
  .post(passport.authenticate('local', {
    failureRedirect: '/login'
  }),
    function(req,res) {
      res.redirect('/')
    }
  );

router
  .route("/register")
  .get(function(req, res, next) {
    res.render("register", { title: "Register a new account" });
  })
  .post(function(req, res, next) {
    req.checkBody("name", "Empty Name").notEmpty();
    req.checkBody("email", "Invalid Email").isEmail();
    req.checkBody("password", "Empty Password").notEmpty();
    req.checkBody("repassword", "Password do not match").equals(req.body.password).notEmpty();

    var errors = req.validationErrors();

    if(errors) {
      res.render('register', {
        name: req.body.name,
        email: req.body.email,
        errorMessages: errors
      })
    }else {
      var user = new User();

      user.name = req.body.name;
      user.email = req.body.email;
      user.setPassword(req.body.password);
      user.save(function (err, newUser) {
        if(err) {
          
          res.render('register', {
            errorMessages:[{
              msg: err.errmsg
            }]
          })
        }else {
          res.redirect('/login');
        }
      });
    }
  });

module.exports = router;