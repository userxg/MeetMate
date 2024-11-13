import React from 'react';
import logo from './logo.svg';
import ProfileCard from './components/ProfileCard';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <ProfileCard
        name="Alice Koe"
        language="English"
        district="Nizhegorodsky"
        status="Student from China"
        description="I'm a Chinese student from HSE university, looking for some friends to help me in adaptation"
      ></ProfileCard>
    </div>
  );
}

export default App;
