var express = require('express');
var app = express();
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://tio:test@ds249428.mlab.com:49428/mytasklist');
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var Task = require('../models/Task.js');

router.get('/tasks', function(req, res, next) {
    Task.find({}, function(err, myObj) {
        if (err) throw err;
        res.json(myObj);
        console.log('getting all tasks..');
    });
});

router.get('/tasks/:id', function(req, res, next) {
    Task.findById(req.params.id, function(err, myObj) {
        if (err) throw err;
        res.json(myObj);
        console.log('getting task by id ' + req.params.id + "..");
    });
});

router.post('/tasks', jsonParser, function(req, res) {
    var newTask = Task(req.body).save(function(err, myObj) {
      if (err) throw err;
      res.json(myObj);
      console.log('new data posted..');
    });
  });

router.delete('/tasks/:id', function(req, res, next) {
    Task.findById(req.params.id).remove(function(err, myObj) {
        if (err) throw err;
        res.json(myObj);
        console.log(req.params.id + " has been removed..");
    });
});

router.put('/tasks/:id', jsonParser, function(req, res) {
    Task.findById(req.params.id, function(err, myObj) {
        if (err) throw err;
        myObj.isDone = !myObj.isDone;
        myObj.save(function(err, myObj1) {
            if (err) throw err;
            res.json(myObj);
            console.log(req.params.id + ' successfully updated..');
        });
    });
});

module.exports = router;