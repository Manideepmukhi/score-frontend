
import React, { useState, useEffect } from 'react';
import './Livematch'
const CricketScoreApp = () => {
  const [liveMatches, setLiveMatches] = useState([]);
 
//eslint-disable-next-line
  const fetchData = () => {
    // Fetch live matches
    fetch('https://cricket-score-production.up.railway.app/match/Live')
      .then(response => response.json())
      .then(data => setLiveMatches(data))
      .catch(error => console.error('Error fetching live matches:', error));

    // Fetch all matches
   
  };
  //eslint-disable-next-line
  const [loading, setLoading] = useState(true);
  //eslint-disable-next-line
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setLoading(true);
  
    // Fetch live matches
    fetch('https://cricket-score-production.up.railway.app/match/Live')
      .then(response => response.json())
      .then(data => {
        setLiveMatches(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  
    // Fetch all matches
  
  }, []);
  
   // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <header>
        <div>
          <button onClick={() => setLiveMatches([])}>Live Matches</button>
        </div>
      </header>

      <div>
        <h2 className='head'>Live Matches</h2>
        <ul className='card-container'>
          {liveMatches.map(match => (
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
