// HomePage.js
import React from 'react';
//import './HomePage.css';

import './trip_details.css';
//import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

const TripDetails = () => {

    function handleNavigation() {
        window.location.href = '/user_input';
    }

  return (
    <div className="home-page">
      <main className="main-content">
        <section className="hero">
          <p>the output page</p>
        </section>

      </main>
    </div>
  );
};

export default TripDetails;
