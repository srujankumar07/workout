const express = require('express')
const router=express.Router()
const Workout=require('../models/workouModels')
const{
  createWorkout,getWorkout,getWorkouts, deleteWorkouts,updateWorkout
}=require('../controller/workoutControllers')



router.get('/', getWorkouts)

router.get('/:id', getWorkout)


router.post('/', createWorkout )

router.delete('/:id', deleteWorkouts)

router.patch('/:id',updateWorkout)





module.exports = router