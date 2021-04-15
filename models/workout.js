const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  exercises: [
    {
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

    distance: {
      type: Number,
    },

    weight: {
      type: Number,
    },

    reps: {
      type: Number,
    },

    sets: {
      type: Number,
    },
    }],
  totalDuration: {
    type: Number,
    default: 0,
  },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
