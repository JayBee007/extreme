var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Code Share: A code sharing platform" });
});

router.get("/about", function(req, res, next) {
  res.render("about", { title: "Code Share: A code sharing platform" });
});

router
  .route("/contact")
  .get(function(req, res, next) {
    res.render("contact", { title: "Code Share: A code sharing platform" });
  })
  .post(function(req, res, next) {
    
    req.checkBody("name", "Invalid Name").notEmpty();
    req.checkBody("email", "Invalid Email").isEmail();
    req.checkBody("message", "Invalid Message").notEmpty();

    var errors = req.validationErrors();
    console.log('errors', errors)
    if (errors) {
      res.render("contact", {
        title: "Code Share: A code sharing platform",
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        errorMessages: errors
      })
    } else {
      res.render("thank", { title: "Code Share: A code sharing platform" });
    }
  });

module.exports = router;
