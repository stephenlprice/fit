const db = require("../models");

module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    console.log('GET: /api/workouts', req.body);
    // db.Workout.find({});
    db.Workout.find({})
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
  });
};