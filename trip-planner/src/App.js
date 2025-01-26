import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserInput from './pages/user_input.jsx';
import HomePage from './pages/home_page.jsx';
import TripDetails from './pages/trip_details.jsx';

function App() {
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