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
          <h1>Welcome to the Trip Planner</h1>
          <p>Discover amazing places, curated just for you.</p>
        </section>

        <section>
            <button className="cta-button" onClick={handleNavigation}> Get More Specific Suggestions</button>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
