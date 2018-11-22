 const express = require('express');
const studentRoutes= express.Router();
//requre student model in routes models
let Student= require('./student.model');
//store route
studentRoutes.route('/add').post(function (req, res) {
  let student = new Student(req.body);
  student.save()
    .then(student => {
      res.status(200).json({'student': 'student added successfully..!'});
    })
    .catch(err => {
    res.status(400).send("unable to save to DB..!");
    });
});

// Defined get data(index or listing) route
studentRoutes.route('/').get(function (req, res) {
    Student.find(function(err,students){
    if(err){
      console.log(err);
    }
    else {
      res.json(students);

    }

  });
});

// Defined edit route
studentRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Student.findById(id, function (err, student){
      res.json(student);
  });
});

//  Defined update route
studentRoutes.route('/update/:id').post(function (req, res) {
    Student.findById(req.params.id, function(err, student) {
    if (!student)
      res.status(404).send("data not found");
    else {
        student.person_name = req.body.person_name;
        student.uni_name = req.body.uni_name;
        student.id_name = req.body.id_name;

        student.save().then(student => {
          res.json('Update complete..!');
      })
      .catch(err => {
            res.status(400).send("unable to update the DB..!");
      });
    }
  });
});

// Defined delete | remove | destroy route
studentRoutes.route('/delete/:id').get(function (req, res) {
    Student.findByIdAndRemove({_id: req.params.id}, function(err, student){
        if(err) res.json(err);
        else res.json('Successfully removed..!');
    });
});

module.exports = studentRoutes;
