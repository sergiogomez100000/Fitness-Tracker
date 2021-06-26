const Workout = require("../models/workout");
const router = require("express").Router();
const path = require("path");

//get all workouts
router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields:{
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
  .then((workoutdb)=>{
    res.json(workoutdb);
  })
  .catch((err)=>{
    res.json(err);
  })
  Workout.find({})  
  .then((workoutdb)=>{
    res.json(workoutdb);
  })  
  .catch((err) => {
    res.json(err);
  });
});

//findOneAndUpdate a workout 
router.put("/api/workouts/:id", ({ params, body }, res) => {
  console.log("HIT THE put /api/workouts/:id ");
  Workout.findOneAndUpdate(
    { _id: params.id },
    { $set: { exercises: {
      type: body.type,
      name: body.name,
      weight: body.weight,
      sets: body.sets,
      reps: body.reps,
      duration: body.duration,
      distance: body.distance,
    } } },
  )
    .then((updatedWorkout) => {
      res.send(updatedWorkout);
      
    })
    .catch((err) => console.log(err));
});

//create new workout
router.post("/api/workouts", (req, res) => {
  console.log("HIT THE post /api/workouts ")
  Workout.create({})
  .then((newWorkout) => {
    res.json(newWorkout);
    console.log("hit the api/workouts");
  })
  .catch((err)=>{
    res.json(err);
  })
});

// Get all workouts from 7 day range
router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([
    { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
  ])
    .limit(7)
    .sort({ _id: -1 })
    .then((dbWorkouts) => {
      console.log(dbWorkouts);
      res.json(dbWorkouts);
    })
    .catch((err)=>{
      res.json(err);
    })
});

module.exports = router;
