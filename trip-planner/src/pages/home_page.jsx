// HomePage.js
import React from 'react';
//import './HomePage.css';

import './home_page.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <main className="main-content">
        <section className="hero">
          <h1>Welcome to the Trip Planner</h1>
          <p>Discover amazing places, curated just for you.</p>
        </section>
        
        <section className="columns">
          <div className="column">
            <h2>Suggestion 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="column">
            <h2>Suggestion 2</h2>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="column">
            <h2>Suggestion 3</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </section>

        <section>
            <button className="cta-button">Get More Specific Suggestions</button>
        </section>
        
      </main>
    </div>
  );
};

export default HomePage;
