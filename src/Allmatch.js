// CricketScoreApp.js

import React, { useState, useEffect } from 'react';
import './Allmatch.css';

const CricketScoreApp = () => {
  const [allMatches, setAllMatches] = useState([]);

  const fetchData = () => {
    // Fetch all matches
    fetch('https://cricket-score-production.up.railway.app/match')
      .then(response => response.json())
      .then(data => setAllMatches(data))
      .catch(error => console.error('Error fetching all matches:', error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <header>
        <div>
          <button onClick={() => setAllMatches([])}>All Matches</button>
        </div>
      </header>

      <div>
        <h2 className='head'>All Matches</h2>
        <ul className='card-container'>
          {allMatches.map(match => (
            <div className="card" key={match.matchNumberVenue}>
              <p className='teamheading'>{match.teamHeading}</p>
              <p>{match.matchNumberVenue}</p>
              <div className='teamscore'>
                <p>{match.battingTeam}</p>
                <p>{match.battingTeamScore}</p>
              </div>
              <div className='teamscore'>
                <p>{match.bowlTeam}</p>
                <p>{match.bowlTeamScore}</p>
              </div>
              <p>{match.liveText}</p>
              <p>{match.textComplete}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CricketScoreApp;
