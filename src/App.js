import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Citys';
import CityDetails from './Pages/weather';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:stateName" element={<CityDetails />} />
      </Routes>
    </Router>
  );
};

export default App;