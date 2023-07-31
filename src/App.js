import './App.css';
import React from 'react';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import PeopleCards from './components/PeopleCards';

function App() {
  return (
    <React.Fragment>
        <Header />
        <LandingSection />
        <PeopleCards />
    </React.Fragment>
  );
}

export default App;
