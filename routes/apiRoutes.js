//db
const db = require("../models");
const router = require("express").Router();

module.exports = (router) => {
  //////Workout Routes//////
  //get all
  router.get("/api/workouts", (req, res) => {
    db.Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration"
          }
        }
      }
    ])
      .then((workoutdb) => {
        db.Workout.find({})
        res.json(workoutdb);
        console.log("hit the api/workouts");
      })
      .catch((err) => {
        res.json(err);
      })
    
    //add excerise, set id, push to model, set true
    // db.Workout.findOneAndUpdate(
    // { _id: params.id },
    router.put("/api/workouts/:id", ({ params, body }, res) => {
      console.log(params.id)
      console.log(body)
      db.Workout.findByIdAndUpdate({ _id: params.id },

        { $push: { exercises: body } }, { new: true })
        .then((updatedWorkout) => {
          res.json(updatedWorkout);
          console.log("hit the api/workouts/:workout")
        }).catch(err => console.log(err));
    });
    //create new workout
    router.post("/api/workouts", (req, res) => {
      db.Workout.create({}).then((newWorkout) => {
        res.json(newWorkout);
        console.log("hit the api/workouts")
      });
    });

    router.get("/api/workouts/range", (req, res) => {
      //find all workouts from 7 days ;limit 7
      db.Workout.aggregate([
        { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
      ])
        .limit(7)
        .sort({ _id: -1 })
        .then((dbWorkouts) => {
          console.log(dbWorkouts);
          res.json(dbWorkouts);
        });
    });
  });
}