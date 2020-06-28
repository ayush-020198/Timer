import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Timer from './Timer';

const particleOptions = {
  "particles": {
  "number": {
  "value": 80,
  "density": {
  "enable": true,
  "value_area": 800
  }
  },
  "shape": {
  "type": "triangle",
  "stroke": {
  "width": 0,
  "color": "#000000"
  },
  "polygon": {
  "nb_sides": 5
  }
  },
  "size": {
  "value": 10,
  "random": true,
  "anim": {
  "enable": true,
  "speed": 800,
  "size_min": 0.1,
  "sync": false
  }
  },
  
  },
  "interactivity": {
  "detect_on": "canvas",
  "events": {
  "onhover": {
  "enable": true,
  "mode": "repulse"
  },
  "resize": true
  },
  "modes": {
  "grab": {
  "distance": 400,
  "line_linked": {
  "opacity": 100
  }
  },
  "bubble": {
  "distance": 400,
  "size": 1,
  "duration": 2,
  "opacity": 1,
  "speed": 3
  },
  "repulse": {
  "distance": 400,
  "duration": 0.4
  },
  "push": {
  "particles_nb": 4
  },
  "remove": {
  "particles_nb": 2
  }
  }
  },
  }

function App() {
  return (
    <div className="App">
      <Particles className="particles"
                    params={particleOptions} />
    <Timer start={Date.now()}/>
    </div>
  );
}

export default App;
