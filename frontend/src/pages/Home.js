import { useEffect, useState } from "react"
import { UseWorkoutContext } from "../hooks/useWorkoutContext"
// components
import WorkoutDetails from "../componets/WorkoutDetails"
import WorkoutForm from "../componets/WorkoutForm"
const Home = () => {
 const {workouts,dispatch}= UseWorkoutContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      const json = await response.json()

      if (response.ok) {
        dispatch({type:'SET_WORKOUT',payload:json})
      }
    }

    fetchWorkouts()
  }, [])

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
      </div>
      <WorkoutForm/>
    </div>
  )
}

export default Home