const express = require('express');
const router = express.Router();
const { Student } = require('../models/student');

//localhost:3001/students
router.get('/', function(req,res){
  Student.find().then(function(students){
    res.send(students);
  }).catch(function(err){
    res.send(err);
  });
});


//localhost:3001/students/id
router.get('/:id', function(req,res){
  let id = req.params.id;
  Student.findById(id).then(function(student){
    res.send(student)
  }).catch(function(err){
    res.send({
    notice: "id not found"
     })
  });
});


//localhost:3001/students
router.post('/', function(req,res){
  let body = req.body;
  console.log(body)
  let s = new Student(body);
  s.save().then(function(student){
    res.send({
      notice: "successfully created",
      student
    })
  }).catch(function(err){
    res.send(err);
  });
});


//localhost:3001/students/id
router.delete('/:id',function(req,res){
  let id = req.params.id;
  console.log(id);;
  Student.findByIdAndDelete(id).then(function(student){
    res.send({
      notice: 'successfully deleted the record'
    });
  }).catch(function(err){
    res.send(err);
  });
});



module.exports = {
  studentsController: router
};
