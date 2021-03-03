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
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
  });

  app.put("/api/workouts", (req, res) => {
    console.log('PUT: /api/workouts', req.body);
  });

  app.post("/api/workouts", (req, res) => {
    console.log('POST: /api/workouts', req.body);
    db.Workout.insert(req.body);

  });
};