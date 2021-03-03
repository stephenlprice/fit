const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Subdocument for cardio exercises
const cardioSchema = new Schema({
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
    required: 'Distance is required'
  }
});

// Subdocument for resistance exercises
const resistanceSchema = new Schema({
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
  weight: {
    type: Number,
    required: 'Weight is required'
  },
  reps: {
    type: Number,
    required: 'Reps is required'
  },
  sets: {
    type: Number,
    required: 'Sets is required'
  }
});

// Document for workout sessions
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
    required: true
  },
  exercises: [cardioSchema] || [resistanceSchema]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;