const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Subdocument for cardio exercises
const exerciseSchema = new Schema({
  type: {
    type: String,
    required: 'Type is required'
  },
  name: {
    type: String,
    required: 'Name is required'
  },
  duration: {
    type: Number,
    required: 'Duration is required'
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
  }
});

// Document for workout sessions
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
    required: true
  },
  exercises: [exerciseSchema]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;