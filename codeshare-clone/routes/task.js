var express = require("express");
var router = express.Router();

var Task = require("../models/task");

router.get("/createTask", function(req, res) {
  var task = new Task();

  task.save(function(err, newTask) {
    if(err) {
      console.log('err saving task', err)
      res.render('error')
    }else {
      res.redirect(`/task/${newTask._id}`)
    }
  });
});


router.get('/task/:id', function(req,res) {
  if(req.params.id) {
    Task.findOne({ _id: req.params.id}, function(err, task) {
      if(err) {
        res.render('error');
      }else if (task) {
        res.render('task', { data: task})
      }else {
        res.render('error') 
      }
    })
  }else {
    res.render('error')
  }  
});

module.exports = router;