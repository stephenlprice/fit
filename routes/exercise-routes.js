const db = require("../models");

module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    db.Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: {
              $map: {
                input: "$exercises",
                as: "activity",
                in: {
                  $sum: "$$activity.duration"
                }
              }
            }
          }
        }
      }
    ])
    .then(dbWorkouts => {
      console.log('workouts:', dbWorkouts);
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: {
              $map: {
                input: "$exercises",
                as: "activity",
                in: {
                  $sum: "$$activity.duration"
                }
              }
            }
          }
        }
      }
    ])
    .then(dbWorkouts => {
      console.log('stats:', dbWorkouts);
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
  });

  app.put("/api/workouts/:id", (req, res) => {
    console.log('add exercise', req.body);
    console.log('to workout id: ', req.params.id);

    db.Workout.findOneAndUpdate(
      {_id: req.params.id}, 
      {$push: { exercises: req.body }},
      {useFindAndModify: false}
    )
    .then(dbExercise => {
      console.log('New Exercise: ', dbExercise);
      res.json(dbExercise);
    })
    .catch(err => {
      console.error(err);
    });
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create({})
    .then(dbWorkout => {
      console.log('new dbWorkout:', dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      console.error(err);
    });
  });
};