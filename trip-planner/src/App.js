// App.js
import React, { useEffect } from 'react';
import HomePage from './pages/home_page.jsx';


function App() {

  useEffect(() => {
    document.title = "Trip Planner";
  }, []);

  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
