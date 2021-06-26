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
      trim: true,
    },

    name: {
      type: String,
      required: "name of exercise is required",
      trim: true,
    },

    duration: {
      type: Number,
      required: "duration of exercise is required",
      default: 0,
    },

    distance: {
      type: Number,
      default: 0,
    },

    weight: {
      type: Number,
      default: 0,
    },

    reps: {
      type: Number,
      default: 0,
    },

    sets: {
      type: Number,
      default:0,
    },
    }],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
