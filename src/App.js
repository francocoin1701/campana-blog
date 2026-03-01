// src/App.js
import React from 'react';
import './App.css';

import Hero from './components/Hero'; 
import Gallery from './components/Gallery'; 
import VideoSection from './components/VideoSection'; // <-- 1. Importa la sección de videos

function App() {
  return (
    <div className="App">
      <main>
        <Hero />
        <Gallery />
        <VideoSection /> {/* <-- 2. Agrégalo aquí */}
      </main>
    </div>
  );
}

export default App;