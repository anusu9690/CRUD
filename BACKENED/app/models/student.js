const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 64
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  mobileNo: {
    type: Number,
    required: true,
    unique: true
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = {
  Student
}
