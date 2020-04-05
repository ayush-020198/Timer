import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';

function App() {
  return (
    <div className="App">
    <Timer start={Date.now()}/>
    </div>
  );
}

export default App;
