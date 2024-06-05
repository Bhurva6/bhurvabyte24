// LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/game');
  };

  const handleFinalReportClick = () => {
    navigate('/final-report');
  };

  return (
    <div className='landing-page'>
      <div className='overlay'>
      <div className='content'>
      <img src="/bajaj_amc_1.png" alt="Logo" className="logo" />
        <div className="landing-container">
          <h1 className="landing-title">Bhurva Sharma BYTE'24 MarTech</h1>
          <h2 >Experience my an internship journey of a lifetime @ BFL 🦾 </h2>
          <p>Click on "Start Journey" to start the journey, incase you've been here before and just want to look at all my work in one glance, click on "My Report" where you could also chat with me! </p>

          <div className="landing-buttons">
            <button className="landing-button" onClick={handleStartClick}>Start Journey 🚗</button>
            <button className="landing-button" onClick={handleFinalReportClick}>My Report 📊 & Chat with me 🙋‍♀️</button>
          </div>
        </div>
      </div>
      <footer className="landing-footer">
        <p>Only a real web dev would make their performance report as a webpage 😎 <br></br>
          Made with ❤️+🔥+☕️ by <a href="https://www.linkedin.com/in/bhurvasharma/"><u>Bhurva Sharma</u></a>.<br></br>
          © 2024 All rights reserved.</p>
      </footer>
      </div> 
      
    </div>
  );
}

export default LandingPage;
