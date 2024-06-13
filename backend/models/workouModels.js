const mongoose = require('mongoose');
const Schema =mongoose.Schema
// Define the workout session schema
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps:{
     type: Number,
     required: true
   
    },
    load: {
        type: Number, // Duration in minutes
        required: true
    }
},
   { timestamps:true}
);

// Create a model for the workout session schema
module.exports = mongoose.model('Workout', workoutSchema);

 
