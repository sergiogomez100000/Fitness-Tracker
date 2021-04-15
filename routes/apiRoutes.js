//db
const db = require("../models");
const router = require("express").Router();

module.exports = (router) => {
  //////Workout Routes//////
  //get all
  router.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (err, workouts) => {
      if (err) {
        console.log(err);
      } else {
        res.json(workouts);
        console.log("hit the api/workouts");
      }
    });
  });
  //add excerise, set id, push to model, set true
  // db.Workout.findOneAndUpdate(
     // { _id: params.id },
  router.put("/api/workouts/:id", ({ params, body }, res) => {
      console.log(params.id)
      console.log(body)
      db.Workout.findByIdAndUpdate({_id: params.id},
     
      { $push: { exercises: body } },{ upsert: true, useFindandModify: false, new: true } )
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
    db.Workout.find({}).limit(7)
    .then((sevendays)=>{
      console.log(sevendays)
      res.json(sevendays)
    })
    //sort by id 
    aggregate.sort({field:"asc", test: -1})
  })
};
