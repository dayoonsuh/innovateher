import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserInput from './pages/user_input.jsx';
import HomePage from './pages/home_page.jsx';
import TripDetails from './pages/trip_details.jsx';
import React, { useEffect } from "react";

function App() {

  useEffect(() => {
    document.title = "TravelMate";
  }, []);

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user_input" element={<UserInput />} />
      <Route path="/trip_details" element={<TripDetails></TripDetails>}></Route>
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;