// HomePage.js
import React from 'react';
//import './HomePage.css';

import './home_page.css';
import './user_input.jsx';
//import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

const HomePage = () => {
  function handleNavigation() {
    window.location.href = '/user_input';
  }

  return (
    <div className="home-page">
      <main className="main-content">
        <section className="hero">
          <div className="text-container">
            <h1>Welcome to TravelMate</h1>
            <p>Make the most out of your travel experience.</p>
          </div>
        </section>

        <section>
          <button className="cta-button" onClick={handleNavigation}>Start Planning Your Trip!</button>
        </section>
      </main>
    </div>
  );
};


export default HomePage;
