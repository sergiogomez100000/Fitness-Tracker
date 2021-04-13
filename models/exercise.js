const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const ExerciseSchema = new Schema({
  type: {
    type: String,
    required: "type of exercise is required",
  },

  name: {
    type: String,
    required: "name of exercise is required",
  },

  duration: {
    type: Number,
    required: "duration of exercise is required",
  },

  distance:{
      type: Number,
  },

  weight: {
    type: Number
  },

  reps:{
      type: Number
  },

  sets:{
      type: Number
  }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
