import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch('https://effective-winner-7vw6rwj9rpjhrv5v-8000.app.github.dev/api/leaderboard/', {
      credentials: 'include'
    })
      .then(response => response.json())
      .then(data => {
        console.log('Fetched leaderboard:', data); // Debugging log
        setLeaders(data);
      })
      .catch(error => console.error('Error fetching leaderboard:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Leaderboard</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaders.map((leader, index) => (
            <tr key={leader._id}>
              <td>{index + 1}</td>
              <td>{leader.user.username}</td>
              <td>{leader.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
