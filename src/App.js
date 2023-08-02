import './App.css';
import React from 'react';
import Homepage from './components/Homepage';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <React.Fragment>
      <Routes>
      <Route path="/" element={<Homepage />} />;
      <Route path="/about" element={<AboutPage />} />
    </Routes>
    </React.Fragment>
  );
}

export default App;
