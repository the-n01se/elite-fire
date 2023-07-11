import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Features from './components/Features/Features';
import Fuel from './components/Fuel/Fuel';

function App() {
  return (
    <div className="App">
      <div class="container">
        <Header />
        <Features />
        <Fuel />
      </div>
    </div>
  );
}

export default App;
