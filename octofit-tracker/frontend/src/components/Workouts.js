import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('http://effective-winner-7vw6rwj9rpjhrv5v-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div>
      <h1>Workouts</h1>
      <ul>
        {workouts.map(workout => (
          <li key={workout._id}>{workout.name} - {workout.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default Workouts;
